import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';

import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import dropstyle from './dropdown';
import { postResgister } from '../API/loginAPI';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import formatDate from '../API/date';

type Selected = {
    label: string;
    value: string;
}
type RootStackParamList = {
    'Login': undefined;
    'ForgotPass': undefined;
    'ChooseInterests': undefined;
    // ... các screen khác ...
  };
function Resgister(): React.JSX.Element {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [dob, setdob] = useState("Open");
    const [valuegender, setValuegender] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [enterpass, setenterpass] = useState("");
    const [valuerole, setValuerole] = useState<string | null>(null);
    const [isFocusrole, setIsFocusrole] = useState(false);

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [msg, setmsg] = useState("");
    const [isPasssecure, setIsPasssecure] = useState(true);
    const data:Selected[] = [
        { label: 'Nam', value: '1' },
        { label: 'Nữ', value: '2' },
        { label: 'Khác', value: '3' },
      ];
    const datarole:Selected[] = [
        { label: 'Người dùng', value: '1' },
        { label: 'Nhà Xuất Bản', value: '2' },
      ];

    const handleLoginPress = () => {
        navigation.navigate("Login");
    }
    const handleResgisterPress = () => {
        postResgister(name, email, phone, dob, valuegender, username, password, enterpass, valuerole).then(result => {
          if (result === true) {
            setmsg("");
            navigation.navigate('ChooseInterests');
          } else {
            setmsg("Sai mật khẩu");
          }
      })
      .catch(error => {
          console.error(error);
      });
      };
  return (
    <View style={{flex: 1}}>
        <ScrollView style={{height: 796}}>
            <TouchableWithoutFeedback style={{height: 796}} onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{height: 796}} behavior='padding'>
              <LinearGradient
                style={styles.resgister}
                colors={['#06AFAA', '#67E093']}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}>
                <ScrollView style={{flex: 1}}>
                    <View style={[styles.box_item]}>
                        <Text style={[styles.item_title]}>ĐĂNG KÝ</Text>
                    </View>
                    <View style={[styles.box_item, {flex: 5}]}>
                        <Text style={styles.item_textcontent}>Thông tin cá nhân</Text>
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>Họ và tên: </Text>
                            <TextInput style={[styles.item_textlabel, selfstyles.box_input, selfstyles.borderinput]}
                            value={name}
                            onChangeText={(text) => {setname(text);}}/>
                        </View>
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>Email: </Text>
                            <TextInput style={[styles.item_textlabel, selfstyles.box_input, selfstyles.borderinput]}
                            value={email}
                            onChangeText={(text) => {setemail(text);}}/>
                        </View>
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>SDT: </Text>
                            <TextInput style={[styles.item_textlabel, selfstyles.box_input, selfstyles.borderinput]}
                            value={phone}
                            onChangeText={(text) => {setphone(text);}} />
                        </View>
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>Ngày Sinh: </Text>
                             <TouchableOpacity style={selfstyles.box_date} onPress={() => setOpen(true)}><Text>{dob}</Text></TouchableOpacity>
                              <DatePicker
                                  modal
                                  mode="date"
                                  open={open}
                                  date={date}
                                  onConfirm={(date) => {
                                    setOpen(false);
                                    let stringdate = formatDate(date);
                                    setdob(stringdate);
                                  }}
                                  onCancel={() => {
                                    setOpen(false);
                                  }}
                                />
                        </View>
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>Giới tính: </Text>
                            <Dropdown
                                style={[selfstyles.box_selected, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={selfstyles.dropdownTextStyle}
                                selectedTextStyle={selfstyles.dropdownTextStyle}
                                inputSearchStyle={dropstyle.inputSearchStyle}
                                iconStyle={dropstyle.iconStyle}
                                data={data}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'choose' : '...'}
                                value={valuegender?.toString()}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                  setValuegender(item.value);
                                  setIsFocus(false);
                                }}
                            />
                        </View>

                    </View>
                    <View style={[styles.box_item, {flex: 3}]}>
                        <Text style={styles.item_textcontent}>Thông tin tài khoản</Text>
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>Tên đăng nhập: </Text>
                            <TextInput style={[styles.item_textlabel, selfstyles.box_input, selfstyles.borderinput]}
                            value={username}
                            onChangeText={(text) => {setusername(text);}} />
                        </View>
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>Mật khẩu: </Text>
                            <TextInput style={[styles.item_textlabel, selfstyles.box_input, selfstyles.borderinput]}
                            value={password} secureTextEntry={isPasssecure}
                            onChangeText={(text) => {setpassword(text);}} />
                        </View>
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>Nhập lại mật khẩu: </Text>
                            <TextInput style={[styles.item_textlabel, selfstyles.box_input, selfstyles.borderinput]}
                            value={enterpass} secureTextEntry={isPasssecure}
                            onChangeText={(text) => {setenterpass(text);}} />
                        </View>
                        {msg != "" && (<Text style={{alignSelf: 'center', color: "#fff"}}>{msg}</Text>)}
                        <View style={styles.item_groupinput}>
                            <Text style={[styles.item_textlabel, selfstyles.box_label]}>Vai trò của bạn: </Text>
                            <Dropdown
                                style={[selfstyles.box_selected, isFocusrole && { borderColor: 'blue' }]}
                                placeholderStyle={selfstyles.dropdownTextStyle}
                                selectedTextStyle={selfstyles.dropdownTextStyle}
                                inputSearchStyle={dropstyle.inputSearchStyle}
                                iconStyle={dropstyle.iconStyle}
                                data={datarole}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusrole ? 'choose' : '...'}
                                value={valuerole?.toString()}
                                onFocus={() => setIsFocusrole(true)}
                                onBlur={() => setIsFocusrole(false)}
                                onChange={item => {
                                  setValuerole(item.value);
                                  setIsFocusrole(false);
                                }}
                            />
                        </View>
                    </View>
                    <View style={[styles.box_item, {flex: 2}]}>
                        <TouchableOpacity style={[styles.item_button, styles.large_button]}
                        onPress={handleResgisterPress}>
                            <Text style={styles.item_textcontent}>Đăng ký</Text>
                        </TouchableOpacity>
                        <View style={[styles.box_item, {flexDirection: 'row'}]}>
                            <Text style={styles.item_textcontent} >Bạn đã có tài khoản? </Text>
                            <TouchableHighlight onPress={handleLoginPress}>
                            <Text style={styles.item_texthref}>Đăng nhập</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
              </LinearGradient>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ScrollView>
    </View>
  );
}
const selfstyles = StyleSheet.create({
    box_label: {
        width: '40%',
    },
    box_input: {
        width: '50%',
    },
    borderinput: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
    },
    dropdownTextStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: "#fff"
    },
    box_selected: {
        width: 150,
    },
    box_date: {
        width: '50%',
        height: 40,
        backgroundColor: '#CCFFCC',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Resgister;
