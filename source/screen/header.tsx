import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';import {
    Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Header({buttonback}): React.JSX.Element {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate("Home");
    }
    const handleBackPress = () => { 
        navigation.goBack();
      };
    return (
    <View style={[selfstyle.self_header]}>
        <TouchableOpacity style={selfstyle.button_icon}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <ImageBackground style={selfstyle.img_icon} source={require('../Image/menu.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={selfstyle.box_title} onPress={handlePress}>
            <Text style={[selfstyle.title, {color: '#06AFAA'}]}>FIND</Text>
            <Text style={[selfstyle.title, {color: '#67E093'}]}>BOOKS</Text>
        </TouchableOpacity> 
        {buttonback && <TouchableOpacity style={selfstyle.box_img}
            onPress={handleBackPress}>
              <ImageBackground style={selfstyle.img} source={require('../Image/left-arrow.png')}/>
        </TouchableOpacity>}  
    </View>
  );
}

const selfstyle = StyleSheet.create({
    self_header: {
        flex: 1,
        width: '90%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        minHeight: 70,
        maxHeight: 70,
    },
    button_icon: {
        width: 30,
        height: 30,
    },
    img_icon: {
        width: '100%',
        height: '100%'
    },
    box_title: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: '900',
        paddingHorizontal: 10,
    },
    box_img: {
        width: '10%',
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
export default Header;