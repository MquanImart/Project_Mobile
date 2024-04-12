import React from 'react';
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
function ResetPassword(): React.JSX.Element {

  return (
    <View style={{flex: 1}}>
        <View style={styles.logo}>
          <ImageBackground style={styles.logoImage} source={require('./source/Image/book.png')}/>
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
            <TextInput style={[styles.item_textinput, styles.item_textcontent]} 
                placeholder='Mật khẩu mới' placeholderTextColor='#fff'/>
            <TextInput style={[styles.item_textinput, styles.item_textcontent]} 
                placeholder='Nhập lại mật khẩu' placeholderTextColor='#fff'/>
          </View>
          <View style={[styles.box_item, {flex: 1.5}]}>
            <TouchableOpacity style={[styles.item_button, styles.large_button]}>
                <Text style={styles.item_textcontent}>Xác nhận</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.item_href}>
              <Text style={styles.item_texthref}>Đăng nhập</Text>
            </TouchableHighlight>
          </View>
        </LinearGradient>
    </View>
  );
}

export default ResetPassword;
