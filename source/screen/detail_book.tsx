import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import {
    FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import CardBook from './cardbook'; 
import Header from './header'
import Comment from './comment';
import { getComment, getDataBook } from '../API/detailbookAPI';

type DetailBook = {
    id: number;
    imglink: string;
    postdate: string;
    title: string;
    genre: string;
    author: string;
    like: number;
    star: number;
    commemt: number;
    describe: string;
    view: number;
}

type DataComment = {
    score: number;
    name: string,
    book_id: number,
    user_id: number,
    content: string,
    comment_date: string
}

function DetailBook({route, navigation}): React.JSX.Element {
    const [databook, setdatabook] = useState<DetailBook>();
    const [comments, setcomments] = useState<DataComment[]>([]);
    const { idbook } = route.params;
    useEffect(() => {
        getDataBook(idbook).then(async result => {
            await setdatabook(result);
        });
        getComment(idbook).then(async result => {
            await setcomments(result);
        });
    }, []);

    const handleBackPress = () => { 
        navigation.goBack();
      };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header/>
        <TouchableOpacity style={selfstyle.box_img}
            onPress={handleBackPress}>
              <ImageBackground style={selfstyle.img} source={require('../Image/left-arrow.png')}/>
              <Text style={selfstyle.textback}>Quay lại</Text>
        </TouchableOpacity>  
        <View style={selfstyle.container}>
            <View style={selfstyle.box_title}><Text style={selfstyle.title}>Thông tin sách</Text></View>
            <View style={selfstyle.box_info}>
                <Text style={selfstyle.name_book}>{databook?.title}</Text>
                <View style={selfstyle.box_category}>
                    <View style={selfstyle.category}><Text style={selfstyle.text_category}>{databook?.genre}</Text></View>
                </View>
                <View style={selfstyle.box_content}>
                    <Text style={selfstyle.label}>Tác giả:</Text>
                    <Text style={selfstyle.text_content}>{databook?.author}</Text>
                </View>
                <View style={selfstyle.box_feedback}>
                    <View style={selfstyle.box_icon}>
                        <ImageBackground style={selfstyle.imgicon} source={require('../Image/heart.png')}/>
                        <Text style={selfstyle.text_content}>{databook?.like}</Text>
                    </View>
                    <View style={selfstyle.box_icon}>
                        <ImageBackground style={selfstyle.imgicon} source={require('../Image/star.png')}/>
                        <Text style={selfstyle.text_content}>{databook?.star}</Text>
                    </View>
                    <View style={selfstyle.box_icon}>
                        <ImageBackground style={selfstyle.imgicon} source={require('../Image/comment.png')}/>
                        <Text style={selfstyle.text_content}>{databook?.commemt}</Text>
                    </View>
                </View>
            </View>
            <View style={selfstyle.box_title}><Text style={selfstyle.title}>Mô tả</Text></View>
            <ScrollView style={selfstyle.box_describe}>
            <Text style={[selfstyle.describe, selfstyle.text_content]}>{databook?.describe}</Text>
            </ScrollView>
            <View style={selfstyle.box_title}><Text style={selfstyle.title}>Bình luận</Text></View>
            <SafeAreaView style={selfstyle.box_comment}>
                {comments.length > 0 && <FlatList
                  data={comments}
                  renderItem={({item}) => 
                  <Comment 
                  user={item.name} 
                  star={item.score}
                  content={item.content} />}
                  keyExtractor={(item) => item.user_id.toString()}
                />}
            </SafeAreaView>
        </View>
    </View>
  );
}
const selfstyle = StyleSheet.create({
    container:{
        width: '90%',
        alignSelf: 'center',
        paddingTop: 20,
    },
    box_title:{
        width: '100%',
        alignSelf: 'center',
        borderBottomColor: '#06AFAA',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    title:{
        color: 'black',
        fontSize: 16,
        fontWeight: '700'
    },
    box_info:{
        width: '100%',
        alignSelf: 'center',
    },
    name_book: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: 5,
    },
    box_category: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 5,
    },
    category: {
        width: 'auto',
        height: 40,
        borderRadius: 50,
        backgroundColor: '#EBEDEF',
        paddingHorizontal: 10,
        margin: 5,
        justifyContent: 'center',
    },
    text_category: {
        color: 'black',
        fontSize: 15,
        fontWeight: '400'
    },
    box_content: {
        flexDirection: 'row',
        padding: 10,
    },
    label: {
        width: 100,
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
    },
    text_content: {
        color: '#3B3B3B',
        fontSize: 16,
        fontWeight: '300',
    },
    box_describe: {
        height: 150,
    },
    describe: {
        textAlign: 'justify'
    },
    box_feedback: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    box_icon: {
        alignItems: 'center'
    },
    imgicon: {
        width: 30,
        height: 30,
    },
    box_comment: {

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
      textback: {
        alignSelf: 'center',
        color: '#06AFAA',
        fontSize: 16,
        fontWeight: '500'
      }
})
export default DetailBook;
