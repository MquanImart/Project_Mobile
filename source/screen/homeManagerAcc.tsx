import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderSelf from './header';
import { NavigationProp, useNavigation } from '@react-navigation/native';
type RootStackParamList = {
  'ManagerAccount': undefined;
  'ChooseInterests': undefined;
  'favoritebook': undefined;
  // ... các screen khác ...
};
function HomeManagerAccount(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const handleManagerAccPress = () => { 
    navigation.navigate('ManagerAccount'); 
  };

  const handleChooseIntPress = () => { 
    navigation.navigate('ChooseInterests'); 
  };

  const handleFavPress = () => { 
    navigation.navigate('favoritebook'); 
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderSelf/>
        <View style={selfstyle.box_homeaccount}>
        <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}
          onPress={handleManagerAccPress}>
            <Text style={styles.item_textcontent}>Quản lý tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}
        onPress={handleChooseIntPress}>
            <Text style={styles.item_textcontent}>Thay đổi thể loại yêu thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}
        onPress={handleFavPress}>
            <Text style={styles.item_textcontent}>Sách đã yêu thích</Text>
        </TouchableOpacity>
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

  }
})
export default HomeManagerAccount;
