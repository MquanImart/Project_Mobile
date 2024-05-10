import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import CardBook from './cardbook'; 
import Header from './header';
import { getInfo, getUsername } from '../API/userAPI';

type InfoUser = {
    id: number,
    name: string,
    email: string,
    phone: string,
    gender: number,
    dob: string,
    avatar: string,
}

function ManagerAccount({navigation}): React.JSX.Element {

    const [info, setinfo] = useState<InfoUser>();
    const [username, setusername] = useState('');
    const handleBackPress = () => { 
        navigation.goBack();
      };
      useEffect(() => {
        getInfo().then(async result => {
            await setinfo(result[0]);
        });
        getUsername().then(async result => {
            await setusername(result[0].username);
        });
    }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header/>
        <TouchableOpacity style={selfstyle.box_img}
            onPress={handleBackPress}>
              <ImageBackground style={selfstyle.img} source={require('../Image/left-arrow.png')}/>
              <Text style={selfstyle.textback}>Quay lại</Text>
        </TouchableOpacity>  
        <View style={selfstyle.box_item}>
            <View style={selfstyle.box_title}>
                <Text style={selfstyle.title}>Thông Tin Cá Nhân</Text>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Họ và tên: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value={info?.name} readOnly/>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Email: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value={info?.email} readOnly/>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Số điện thoại: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value={info?.phone} readOnly/>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Ngày sinh: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value={info?.dob} readOnly/>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Giới Tính: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value={info?.gender == 1? 'Nam': 'Nữ'} readOnly/>
            </View>
        </View>
        <View style={selfstyle.box_item}>
            <View style={selfstyle.box_title}>
                <Text style={selfstyle.title}>Thông Tin Tài Khoản</Text>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Tên tài khoản: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value={username} readOnly/>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Mật khẩu: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value='*************' readOnly/>
            </View>
        </View>
        <View style={selfstyle.box_button}>
            <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}>
                <Text style={styles.item_textcontent}>Thay đổi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}>
                <Text style={styles.item_textcontent}>Lưu</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const selfstyle = StyleSheet.create({
    box_item: {
        width:'90%',
        alignSelf: 'center'
    },
    box_title: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 10,
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800'
    },
    box_input: {
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
    text_conntet: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    input: {
        width: '65%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        padding: 0,
    },
    box_button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    size_button: {
        width: 120,
        height: 50,
    },
    box_img: {
        width: '30%',
        height: 45,
        padding: 10,
        flexDirection: 'row'
      },
      img: {
        width: 25,
        height: 25
      },
      textback: {
        alignSelf: 'center',
        color: '#06AFAA',
        fontSize: 16,
        fontWeight: '500'
      }
})
export default ManagerAccount;
