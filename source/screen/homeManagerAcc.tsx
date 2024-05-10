import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderSelf from './header';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { getNameEmail } from '../API/userAPI';
type RootStackParamList = {
  'ManagerAccount': undefined;
  'ChooseInterests': undefined;
  'favoritebook': undefined;
  // ... các screen khác ...
};
function HomeManagerAccount(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const handleManagerAccPress = () => { 
    navigation.navigate('ManagerAccount'); 
  };

  const handleChooseIntPress = () => { 
    navigation.navigate('ChooseInterests'); 
  };

  const handleFavPress = () => { 
    navigation.navigate('favoritebook'); 
  };
  useEffect(() => {
    getNameEmail().then(result => {
      setname(result[0].name);
      setemail(result[0].email);
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderSelf/>
        <ImageBackground style={selfstyle.img_background} source={require('../Image/background_user.png')}/>
        <View style={selfstyle.box_item}>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Họ và tên: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value={name} readOnly/>
            </View>
            <View style={selfstyle.box_input}>
                <Text style={selfstyle.text_conntet}>Email: </Text>
                <TextInput style={[selfstyle.text_conntet, selfstyle.input]} value={email} readOnly/>
            </View>
        </View>
        <View style={selfstyle.box_homeaccount}>
        <View style={selfstyle.box_item_button}>
          <TouchableOpacity style={selfstyle.box_button}
            onPress={handleManagerAccPress}>
              <Text style={selfstyle.text_boxbutton}>Quản lý tài khoản</Text>
              <ImageBackground style={selfstyle.img_icon} source={require('../Image/setting.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={selfstyle.box_button}
          onPress={handleChooseIntPress}>
              <Text style={selfstyle.text_boxbutton}>Thay đổi thể loại yêu thích</Text>
              <ImageBackground style={selfstyle.img_icon} source={require('../Image/genre.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={selfstyle.box_button}
          onPress={handleFavPress}>
              <Text style={selfstyle.text_boxbutton}>Sách đã yêu thích</Text>
              <ImageBackground style={selfstyle.img_icon} source={require('../Image/heart.png')}/>
          </TouchableOpacity>
        </View>
        </View>
    </View>
  );
}
const selfstyle = StyleSheet.create({
  size_button: {
    width: 300,
    height: 50,
    marginVertical: 10,
  },
  box_homeaccount: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  box_item: {
    width:'90%',
    alignSelf: 'center'
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
    color: 'gray',
    fontSize: 15,
    fontWeight: '500'
  },
  input: {
    width: '65%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    padding: 0,
  },
  img_icon: {
    width: 20,
    height: 20,
  },
  img_background: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  box_button: {
    width: '50%',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text_boxbutton: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    paddingHorizontal: 5,
  },
  box_item_button: {
    width: '100%',
    alignItems: 'center',
  }
})
export default HomeManagerAccount;
