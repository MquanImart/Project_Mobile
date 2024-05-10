import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { postLogin } from '../API/loginAPI';
import { ScrollView } from 'react-native-gesture-handler';
// Xác định kiểu dữ liệu cho danh sách tham số của navigator
type RootStackParamList = {
  'HomeDrawer': undefined;
  'StackForgotPass': undefined;
  'ResgisterAccount': undefined;
  // ... các screen khác ...
};
function Login(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [username, setusername]= useState("");
  const [password, setpassword]= useState("");
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [textMsg, setTextMsg] = useState("");
  const [isPasssecure, setIsPasssecure] = useState(true);

  const handleLoginPress = () => {
    postLogin(username, password).then(result => {
      if (result === true) {
        setIsTextVisible(false);
        setTextMsg("");
        navigation.navigate('HomeDrawer'); // Chuyển đến màn hình Home
      } else {
        setIsTextVisible(true);
        setTextMsg("Tên đăng nhập hoặc mật khẩu không đúng");
      }
  })
  .catch(error => {
      console.error(error);
  });
  };
  const handleForgotPassPress = () => { 
    navigation.navigate('StackForgotPass'); 
  };
  const handleResgisterPress = () => { 
    navigation.navigate('ResgisterAccount'); 
  };
  const handleShowPassPress = () => { 
    setIsPasssecure(!isPasssecure);
  };
  return (
    <View style={{flex: 1}}>
        <ScrollView style={{maxHeight: '100%'}}>
          <View style={styles.logo}>
            <ImageBackground style={styles.logoImage} source={require('../Image/book.png')}/>
            <View style={styles.titlelogo}>
              <Text style={[styles.title_text, {color: '#06AFAA'}]}>FIND </Text> 
              <Text style={[styles.title_text, {color: '#67E093'}]}>BOOKS</Text>
            </View>
          </View>
          <LinearGradient
              style={styles.container}
              colors={['#06AFAA', '#67E093']}
              start={{ x: 1, y: 1 }}
              end={{ x: 1, y: 0 }}>
            <View style={[styles.box_item]}>
              <Text style={[styles.item_title]}>ĐĂNG NHẬP</Text>
            </View>
            <View style={[styles.box_iteminput]}>
              <TextInput style={[styles.item_textinput, styles.item_textcontent]} 
                  placeholder='Username' placeholderTextColor='#fff'
                  value={username}
                  onChangeText={(text) => {setusername(text);}}/>
              <View style={[styles.item_textinput, selfstyles.item_pass]}>
                <TextInput style={[selfstyles.item_textinputpass, styles.item_textcontent]} 
                    placeholder='Password' placeholderTextColor='#fff'
                    value={password} secureTextEntry={isPasssecure}
                    onChangeText={(text) => {setpassword(text);}}/>
                <TouchableOpacity style={selfstyles.box_img} onPress={handleShowPassPress}>
                  <ImageBackground style={selfstyles.img} source={require('../Image/eye.png')}/>
                </TouchableOpacity>
              </View>
              {isTextVisible && <Text style={[styles.item_textcontent, {color: '#CE624B'}]}>{textMsg}</Text>}
              
            </View>
            <View style={[styles.box_item, {flex: 1.5}]}>
              <TouchableOpacity style={[styles.item_button, styles.large_button]}
                onPress={handleLoginPress}>
                  <Text style={styles.item_textcontent}>Login</Text>
              </TouchableOpacity>
              <TouchableHighlight style={styles.item_href}
                onPress={handleForgotPassPress}>
                <Text style={styles.item_texthref}>Quên mật khẩu?</Text>
              </TouchableHighlight>
            </View>
            <View style={[styles.box_item, {flexDirection: 'row'}]}>
              <Text style={styles.item_textcontent}>Bạn chưa có tài khoản? </Text>
              <TouchableHighlight
                onPress={handleResgisterPress}>
                <Text style={styles.item_texthref}>Đăng ký</Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </ScrollView>
    </View>
  );
}
const selfstyles = StyleSheet.create({
  item_pass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box_img: {
    width: 20, height: 20,
    alignSelf: 'flex-end',
    margin: 15,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  item_textinputpass: {
    width: '90%',
  }
})
export default Login;
