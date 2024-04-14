import React from 'react';import {
    Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type StockComment = {
    user: string;
    star: number;
    content: string;
}

function Comment({user, star, content}: StockComment): React.JSX.Element {
  return (
    <View style={selfstyle.comment}>
        <View style={selfstyle.flex_row}>
            <Text style={selfstyle.text_user}>{user}</Text>
            <View style={selfstyle.flex_row}>
                <Text style={selfstyle.text}>{star}</Text>
                <ImageBackground style={selfstyle.imgicon} source={require('../Image/star.png')}/>
            </View>
        </View>
        <View>
            <Text style={selfstyle.text}>{content}</Text>
        </View>
    </View>
  );
}

const selfstyle = StyleSheet.create({
    comment: {
        borderColor: '#06AFAA',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
    },
    imgicon: {
        marginHorizontal: 10,
        width: 20,
        height: 20,
    },
    text: {
        color: '#3B3B3B',
        fontSize: 15,
        fontWeight: '300'
    },
    flex_row: {
        flexDirection: 'row',
    },
    text_user: {
        paddingEnd: 10,
        marginEnd: 10,
        borderRightWidth: 1,
        borderRightColor: 'black',
        color: '#3B3B3B',
        fontSize: 15,
        fontWeight: '600'
    }
})
export default Comment;
