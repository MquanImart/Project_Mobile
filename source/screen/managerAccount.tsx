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
import { getInfo, getUsername, updateInfo } from '../API/userAPI';
import DatePicker from 'react-native-date-picker';
import formatDate from '../API/date';

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
    const [msg, setmsg] = useState("");
    const [editable, setEditable] = useState(false);
    const [gender, setgender] = useState("Nam");
    const [info, setinfo] = useState<InfoUser>(
        {
            id: 0,
            name: '',
            email: '',
            phone: '',
            gender: 1,
            dob: '',
            avatar: '',
          }
    );
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    
    const [username, setusername] = useState('');
    const handleBackPress = () => { 
        navigation.goBack();
      };
    useEffect(() => {
        getInfo().then(async result => {
            await setinfo(result[0]);
        });
        setgender(info.gender==1?"nam":"Nữ");
        getUsername().then(async result => {
            await setusername(result[0].username);
        });
    }, []);

    const toggleEditable = () => {
        setEditable(!editable);
        if (editable){
            getInfo().then(async result => {
                await setinfo(result[0]);
            });
            setgender(info.gender==0?"Nữ":"nam");
            getUsername().then(async result => {
                await setusername(result[0].username);
            });
        }
      };
    
      const handleChangeText = (text: string, label: string) => {
        if (label == "name"){
            setinfo(prevInfo => ({
                ...prevInfo,
                name: text
              }));
        }
        else if (label == "email"){
            setinfo(prevInfo => ({
                ...prevInfo,
                email: text
              }));
        }
        else if (label == "sdt"){
            setinfo(prevInfo => ({
                ...prevInfo,
                phone: text
              }));
        }
        else if (label == "dob"){
            setinfo(prevInfo => ({
                ...prevInfo,
                dob: text
              }));
        }
        else if (label == "gender"){
            setgender(text);
        }
      };
      
      const handleUpdate = () => {
        updateInfo(info.name, info.email,info.phone, info.dob, gender).then(result => {
            if (result){
                setmsg("");
                toggleEditable();
            }
            else{
                setmsg("Không thể cập nhật!");
            }
        })
      }
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header buttonback={true}/>
        <View style={[selfstyle.box_item, {flex: 8}]}>
            <View style={selfstyle.box_title}>
                <Text style={selfstyle.title}>Thông Tin Cá Nhân</Text>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Họ và tên: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} 
                value={info?.name} editable={editable} 
                onChangeText={(text) => {handleChangeText(text,"name");}} />
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Email: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} 
                value={info?.email} editable={editable}
                onChangeText={(text) => {handleChangeText(text,"email");}}/>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Số điện thoại: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} 
                value={info?.phone} editable={editable}
                onChangeText={(text) => {handleChangeText(text,"sdt");}}/>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Ngày sinh: </Text>
                <TouchableOpacity style={selfstyle.box_date} onPress={() => setOpen(true)}><Text style={{color: 'black'}}>{info.dob}</Text></TouchableOpacity>
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={(date) => {
                    if (editable){  
                        let stringdate = formatDate(date);
                        handleChangeText(stringdate,"dob");
                    }
                    setOpen(false);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Giới Tính: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} 
                value={gender} editable={editable}
                onChangeText={(text) => {handleChangeText(text,"gender");}}/>
            </View>
        </View>
        <View style={[selfstyle.box_item, {flex: 4}]}>
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
        {msg != "" && <Text style={selfstyle.error_msg}>{msg}</Text>}
        <View style={selfstyle.box_button}>
            <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}
            onPress={toggleEditable}>
                <Text style={styles.item_textcontent}>{editable?"Hủy":"Thay Đổi"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}
            onPress={handleUpdate}>
                <Text style={styles.item_textcontent}>Lưu</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    size_button: {
        width: 120,
        height: 50,
    },
      error_msg: {
        alignSelf: 'center',
        color: 'red'
      },
      box_date: {
        width: '65%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    }
})
export default ManagerAccount;
