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
import { postSubmitChangePass } from '../API/loginAPI';

import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

type RootStackParamList = {
  'Login': undefined;
  'ForgotPass': undefined;
  'Resgister': undefined;
}

function ResetPassword(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [password, setpassword] = useState("");
  const [enterpass, setenterpass] = useState("");
  const [isPasssecurepass, setIsPasssecurepass] = useState(true);
  const [isPasssecureenter, setIsPasssecureenter] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [textMsg, setTextMsg] = useState("");

  const handleSubmitPress = () => {
    postSubmitChangePass(password, enterpass).then(result => {
      if (result === true) {
        setIsTextVisible(false);
        setTextMsg("");
        navigation.navigate('Login'); // Chuyển đến màn hình Home
      } else {
        setIsTextVisible(true);
        setTextMsg("Mật khẩu không khớp");
      }
  })
  .catch(error => {
      console.error(error);
  });
  };
  const handleShowPassPress = () => { 
    setIsPasssecurepass(!isPasssecurepass);
  };
  const handleShowEnterPassPress = () => { 
    setIsPasssecureenter(!isPasssecureenter);
  };
  const handleLoginPress = () => { 
    setIsTextVisible(false);
    setTextMsg("");
     navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1}}>
        <ScrollView>
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
              <Text style={[styles.item_title]}>QUÊN MẬT KHẨU</Text>
            </View>
            <View style={[styles.box_iteminput]}>
              <View style={[styles.item_textinput, selfstyles.item_pass]}>
                <TextInput style={[styles.item_textinput, styles.item_textcontent]} 
                  placeholder='Mật khẩu mới' placeholderTextColor='#fff'
                  value={password} secureTextEntry={isPasssecurepass}
                  onChangeText={(text) => {setpassword(text);}}/>
                <TouchableOpacity style={selfstyles.box_img} onPress={handleShowPassPress}>
                  <ImageBackground style={selfstyles.img} source={require('../Image/eye.png')}/>
                </TouchableOpacity>
              </View>
              <View style={[styles.item_textinput, selfstyles.item_pass]}>
                <TextInput style={[styles.item_textinput, styles.item_textcontent]} 
                  placeholder='Nhập lại mật khẩu' placeholderTextColor='#fff'
                  value={enterpass} secureTextEntry={isPasssecureenter}
                  onChangeText={(text) => {setenterpass(text);}}/>
                <TouchableOpacity style={selfstyles.box_img} onPress={handleShowEnterPassPress}>
                  <ImageBackground style={selfstyles.img} source={require('../Image/eye.png')}/>
                </TouchableOpacity>
              </View>
              {isTextVisible && <Text style={[styles.item_textcontent, {color: '#CE624B'}]}>{textMsg}</Text>}
            </View>
            <View style={[styles.box_item, {flex: 1.5}]}>
              <TouchableOpacity style={[styles.item_button, styles.large_button]}
              onPress={handleSubmitPress}>
                  <Text style={styles.item_textcontent}>Xác nhận</Text>
              </TouchableOpacity>
              <TouchableHighlight style={styles.item_href}
              onPress={handleLoginPress}>
                <Text style={styles.item_texthref}>Đăng nhập</Text>
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
export default ResetPassword;
