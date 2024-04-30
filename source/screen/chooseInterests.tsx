import React, { useEffect, useState } from 'react';
import styles from './styles_login';
import {
    StyleSheet,
    Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { getAllGenre } from '../API/genreAPI';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

type Genre = {
    id: number;
    genre_name: string;
}

function ChooseInterests(): React.JSX.Element {
    const [listgenre, setlistgenre] = useState<Genre[]>([]);
    const handlePress = () =>{

    }
    useEffect(() => {
        getAllGenre().then(genre => {
            setlistgenre(genre);
        });
    }, []);

  return (
    <View style={{flex: 1}}>
        <View style={[selfstyles.box_item, {height: 140}]}>
            <Text style={selfstyles.title}>Hãy Chọn sở thích của bạn</Text>
            <Text style={selfstyles.describe}>Nhận các nội dung liên quan đến bạn</Text>
        </View>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView style={[{height: 556}]}>
              {listgenre.map((item, index) => (
                <TouchableOpacity key={item.id} style={[selfstyles.interest, index%2==0?{alignSelf: 'flex-start'}: {alignSelf: 'flex-end'}]}
                    onPress={handlePress}>
                  <Text style={selfstyles.text_inter}>{item.genre_name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
        </GestureHandlerRootView>
        <View style={[selfstyles.box_item, selfstyles.box_button, {height: 100}]}>
            <TouchableOpacity style={[selfstyles.button, {backgroundColor: '#ccc'}]}>
                <Text style={[styles.item_textcontent, {color: 'black'}]}>Bỏ Qua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[selfstyles.button, {backgroundColor: '#62D5C4'}]}>
                <Text style={styles.item_textcontent}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const selfstyles = StyleSheet.create({
    box_item: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
        color: 'black',
    },
    describe: {
        fontSize: 17,
        fontWeight: '400',
        color: '#000',
    },
    interest: {
        height: 50,
        width: '80%',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
    },
    text_inter: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500'
    },
    button: {
        width: '40%',
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_button: {
        justifyContent: 'space-around'
    },

})
export default ChooseInterests;
