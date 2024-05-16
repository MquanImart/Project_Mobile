import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import {
    FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import ManagerCard from './managerCard'; 
import Header from './header';
import { Typebook } from './home';
import { getData, postHideBook } from '../API/nxbAPI';
function ManagerBook({navigation}): React.JSX.Element {
    const [data, setdata] = useState<Typebook[]>([]);

    useEffect(() => {
        getData().then(result => {
            setdata(result);
        });
    }, []);

    const handleOpenAdd = () => {
        navigation.navigate("Editbook", {action: "Add"})
    }

    const handleOpenEdit = (idbook: any) => {
        navigation.navigate("Editbook", {action: "Edit", idbook: idbook})
    }
    const handleHide = async (idbook: any) => {
        await postHideBook(idbook);
        
        setdata((prevData: any[]) => prevData.map(book => 
            book.id === idbook ? { ...book, active: book.active === 0? 1: 0 } : book
        ));
        
    }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header buttonback={false}/>
        <View style={selfstyle.header}>
            <Text style={selfstyle.title}>Quản Lý Sách</Text>
            <TouchableOpacity style={selfstyle.button}
            onPress={handleOpenAdd}>
                <Text style={selfstyle.text_button}>Thêm Sách</Text>
            </TouchableOpacity>
        </View>
        <SafeAreaView style={selfstyle.list_book}>
            <FlatList
              data={data}
              renderItem={({item, index}) => 
              <ManagerCard 
              title={item.title} 
              link_img={item.img_link}
              category={[item.genre_name]} 
              active={item.active}
              describe={item.describes}
              pressEdit={() => {handleOpenEdit(item.id)}}
              pressHide={() => {handleHide(item.id)}}
              indexcard={index} />}
              keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    </View>
  );
}
const selfstyle = StyleSheet.create({
    header: {
        width: '90%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomColor: '#06AFAA',
        borderBottomWidth: 0.5,
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        paddingHorizontal: 10,
        color: '#06AFAA'
    },
    box_propose: {
        width:'90%', height: 50,
        marginVertical: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text_propose: {
        fontSize: 20,
        fontWeight: '900',
        color: "#67E093"
    },
    list_book: {
        width: '100%',
    },
    button: {

    },
    text_button: {
        color: '#06AFAA'
    }
})
export default ManagerBook;
