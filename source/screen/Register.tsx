import React from 'react';
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
function Resgister(): React.JSX.Element {

  return (
    <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
          <LinearGradient
            style={styles.container}
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
                        <TextInput style={[styles.item_textlabel, selfstyles.box_input]}
                        placeholder='...' placeholderTextColor='#fff'/>
                    </View>
                    <View style={styles.item_groupinput}>
                        <Text style={[styles.item_textlabel, selfstyles.box_label]}>Email: </Text>
                        <TextInput style={[styles.item_textlabel, selfstyles.box_input]}
                        placeholder='...' placeholderTextColor='#fff'/>
                    </View>
                    <View style={styles.item_groupinput}>
                        <Text style={[styles.item_textlabel, selfstyles.box_label]}>SDT: </Text>
                        <TextInput style={[styles.item_textlabel, selfstyles.box_input]}
                        placeholder='...' placeholderTextColor='#fff'/>
                    </View>
                    <View style={styles.item_groupinput}>
                        <Text style={[styles.item_textlabel, selfstyles.box_label]}>Ngày Sinh: </Text>
                        <TextInput style={[styles.item_textlabel, selfstyles.box_input]}
                        placeholder='...' placeholderTextColor='#fff'/>
                    </View>
                    <View style={styles.item_groupinput}>
                        <Text style={[styles.item_textlabel, selfstyles.box_label]}>Giới tính: </Text>
                        <TextInput style={[styles.item_textlabel, selfstyles.box_input]}
                        placeholder='...' placeholderTextColor='#fff'/>
                    </View>

                </View>
                <View style={[styles.box_item, {flex: 3}]}>
                    <Text style={styles.item_textcontent}>Thông tin tài khoản</Text>
                    <View style={styles.item_groupinput}>
                        <Text style={[styles.item_textlabel, selfstyles.box_label]}>Tên đăng nhập: </Text>
                        <TextInput style={[styles.item_textlabel, selfstyles.box_input]}
                        placeholder='...' placeholderTextColor='#fff'/>
                    </View>
                    <View style={styles.item_groupinput}>
                        <Text style={[styles.item_textlabel, selfstyles.box_label]}>Mật khẩu: </Text>
                        <TextInput style={[styles.item_textlabel, selfstyles.box_input]}
                        placeholder='...' placeholderTextColor='#fff'/>
                    </View>
                    <View style={styles.item_groupinput}>
                        <Text style={[styles.item_textlabel, selfstyles.box_label]}>Nhập lại mật khẩu: </Text>
                        <TextInput style={[styles.item_textlabel, selfstyles.box_input]}
                        placeholder='...' placeholderTextColor='#fff'/>
                    </View>
                </View>
                <View style={[styles.box_item, {flex: 2}]}>
                    <TouchableOpacity style={[styles.item_button, styles.large_button]}>
                        <Text style={styles.item_textcontent}>Login</Text>
                    </TouchableOpacity>
                    <View style={[styles.box_item, {flexDirection: 'row'}]}>
                        <Text style={styles.item_textcontent}>Bạn đã có tài khoản? </Text>
                        <TouchableHighlight>
                        <Text style={styles.item_texthref}>Đăng nhập</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
          </LinearGradient>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </View>
  );
}
const selfstyles = StyleSheet.create({
    box_label: {
        width: '40%',
    },
    box_input: {
        width: '50%',
    }
})
export default Resgister;
