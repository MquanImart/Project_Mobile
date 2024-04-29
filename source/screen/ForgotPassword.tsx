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
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { postChangePass, postSendEmail } from '../API/loginAPI';
type RootStackParamList = {
  'Login': undefined;
  'Resgister': undefined;
  'ResetPass': undefined;
  // ... các screen khác ...
};
function ForgotPassword(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [username, setusername] = useState("");
  const [otp, setotp] = useState("");
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [textMsg, setTextMsg] = useState("Username");
  const [isTextVisibleotp, setIsTextVisibleotp] = useState(false);
  const [textMsgotp, setTextMsgotp] = useState("Username");
  const [username_verify, setusername_verify] = useState("");
  const handleBackPress = () => { 
    setIsTextVisible(false);
    setTextMsg("Username");
    navigation.navigate('Login'); 
  };
  const handleResgisterPress = () => { 
    navigation.navigate('Resgister'); 
  };
  const handleSendCodePress = () => {
    postSendEmail(username).then(result => {
      if (result === true) {
        setIsTextVisible(false);
        setTextMsg("Username");
        setusername_verify(username);
      } else {
        setusername("");
        setIsTextVisible(true);
        setTextMsg("Username không tồn tại");
        setusername_verify("");
      }
  })
  .catch(error => {
      console.error(error);
  });
  };
  const handleChangePassPress = () => {
    postChangePass(username_verify, otp).then(result => {
      if (result === true) {
        setIsTextVisibleotp(false);
        setTextMsgotp("Username");
        navigation.navigate('ResetPass'); 
      } else {
        setotp("");
        setIsTextVisibleotp(true);
        setTextMsgotp("Không đúng");
      }
  })
  .catch(error => {
      console.error(error);
  });
  };
  return (
    <View style={{flex: 1}}>
        <ScrollView>
          <View style={self_styles.box_logo}>
            <TouchableOpacity style={self_styles.box_img}
            onPress={handleBackPress}>
              <ImageBackground style={self_styles.img} source={require('../Image/left-arrow.png')}/>
              <Text style={self_styles.textback}>Đăng nhập</Text>
            </TouchableOpacity>  
            <View style={self_styles.logo}> 
              <ImageBackground style={styles.logoImage} source={require('../Image/book.png')}/>
              <View style={styles.titlelogo}>
                <Text style={[styles.title_text, {color: '#06AFAA'}]}>FIND </Text> 
                <Text style={[styles.title_text, {color: '#67E093'}]}>BOOKS</Text>
              </View>
            </View>
          </View>
          <LinearGradient
              style={styles.container}
              colors={['#06AFAA', '#67E093']}
              start={{ x: 1, y: 1 }}
              end={{ x: 1, y: 0 }}>
            <View style={[styles.box_item]}>
              <Text style={[styles.item_title]}>QUÊN MẬT KHẨU</Text>
            </View>
            <View style={[styles.box_iteminput]}>
              <TextInput style={[styles.item_textinput, styles.item_textcontent]} 
                  placeholder={textMsg} placeholderTextColor= {isTextVisible? '#CE624B': '#fff'}
                  value={username}
                  onChangeText={(text) => {setusername(text);}}/>
              <View style={self_styles.item_buttoninput}>
                  <TouchableOpacity style={[styles.item_button, styles.small_button]}
                    onPress={handleSendCodePress}>
                      <Text style={styles.item_textcontent}>Gửi mã</Text>
                  </TouchableOpacity>
                  <TextInput style={[styles.item_textinput, styles.item_textcontent, {width: '50%'}]} 
                      placeholder={textMsgotp} placeholderTextColor={isTextVisibleotp? '#CE624B': '#fff'}
                      value={otp}
                      onChangeText={(text) => {setotp(text);}}/>
              </View>
            </View>
            <View style={[styles.box_item, {flex: 1.5}]}>
              <TouchableOpacity style={[styles.item_button, styles.large_button]}
                onPress={handleChangePassPress}>
                  <Text style={styles.item_textcontent}>Xác nhận</Text>
              </TouchableOpacity>
              
            </View>
            <View style={[styles.box_item, {flexDirection: 'row'}]}>
              <Text style={styles.item_textcontent}>Bạn chưa có tài khoản? </Text>
              <TouchableHighlight onPress={handleResgisterPress}>
                <Text style={styles.item_texthref}>Đăng ký</Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </ScrollView>
    </View>
  );
}

const self_styles = StyleSheet.create({
    item_buttoninput: {
        width: '100%',
        flexDirection: 'row',
        padding: 40,
        justifyContent: 'space-between'
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
    logo: {
      width: '100%',
      height: 220,
      justifyContent: 'center',
      alignItems:'center',
    },
    box_logo: {
      width: '100%',
      height: 270,
    },
    textback: {
      alignSelf: 'center',
      color: '#06AFAA',
      fontSize: 16,
      fontWeight: '500'
    }
});

export default ForgotPassword;
