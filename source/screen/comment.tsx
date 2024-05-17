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
    sentiment: number;
}

function Comment({user, star, content, sentiment}: StockComment): React.JSX.Element {
  return (
    <View style={[selfstyle.box_comment, sentiment == 0?{borderColor: '#FF6666'}:(sentiment==1?{borderColor: '#00FF00'}:{borderColor: '#FF8000'})]}>
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
        <View style={selfstyle.box_sentiment}>
        <ImageBackground style={selfstyle.sentiment_icon} 
                source={sentiment == 0?require('../Image/negative.png'):(sentiment == 1?require('../Image/positive.png'):require('../Image/neutral.png')) }/>
        </View>
    </View>
  );
}

const selfstyle = StyleSheet.create({
    box_comment: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
    },
    comment: {
        flex: 4,
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
    },
    box_sentiment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sentiment_icon: {
        width: '100%',
        height: 38,
    }
})
export default Comment;
