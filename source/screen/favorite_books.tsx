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
import FavoriteCard from './favorite_card'; 
import { deleteBookLove, getLoveBook } from '../API/proposeAPI';
import Header from './header';

export type Typebook = {
    id: number;
    genre_id: number;
    title: string;
    author: string;
    post_date: string;
    describes: string;
    img_link: string;
    view: number;
    active: number;
    genre_name: string;
}

function FavoriteBook({navigation}): React.JSX.Element {
    const [data, setdata] = useState<Typebook[]>([]);

    const handleDelete = (id_book: number) => {
        deleteBookLove(id_book).then(result =>{
            if (result){
                getLoveBook().then(result => {
                    setdata(result);
                });
            }
            else {
                
            }
        })
    }
    useEffect(() => {
        getLoveBook().then(result => {
            setdata(result);
        });
    }, []);

    const handleBackPress = () => { 
        navigation.goBack();
      };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header buttonback={true}/>
        <Text style={selfstyle.title}>Sách Yêu Thích</Text>
        <View style={selfstyle.box_search}>
            <TouchableOpacity style={[selfstyle.icon_search]}>
                <ImageBackground style={selfstyle.img_icon} source={require('../Image/find.png')}/>
            </TouchableOpacity>
            <TextInput style={selfstyle.input_search}
                placeholder='Tên sách' placeholderTextColor='#A6A6A6'></TextInput>
        </View>
        <SafeAreaView style={selfstyle.list_book}>
            <FlatList
              data={data}
              renderItem={({item, index}) => 
              <FavoriteCard title={item.title} 
              category={item.genre_name} 
              describe={item.describes} 
              indexcard={index} 
              pressButton={() => {handleDelete(item.id)}}>
          </FavoriteCard>}
              keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    </View>
  );
}
const selfstyle = StyleSheet.create({
    self_header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button_icon: {
        width: 40,
        height: '55%',
    },
    img_icon: {
        width: '100%',
        height: '100%'
    },
    box_title: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        paddingHorizontal: 10,
        color: '#06AFAA'
    },
    box_search: {
        width: '90%',height: 50,
        marginVertical: 10,
        backgroundColor: '#EBEDEF',
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon_search: {
        width: 30,
        height: '50%'
    },
    input_search: {
        width: '60%',
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
})
export default FavoriteBook;
