import React from 'react';import {
    Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View style={[selfstyle.self_header]}>
        <TouchableOpacity style={selfstyle.button_icon}>
            <ImageBackground style={selfstyle.img_icon} source={require('../Image/back.png')}/>
        </TouchableOpacity>
        <View style={selfstyle.box_title}>
            <Text style={[selfstyle.title, {color: '#06AFAA'}]}>FIND</Text>
            <Text style={[selfstyle.title, {color: '#67E093'}]}>BOOKS</Text>
        </View> 
    </View>
  );
}

const selfstyle = StyleSheet.create({
    self_header: {
        width: '90%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center'
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
    }
})
export default Header;