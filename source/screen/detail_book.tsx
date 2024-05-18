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
import { getComment, getDataBook, postComment } from '../API/detailbookAPI';
import addcomment from './addcomment';
import { addBookLove } from '../API/proposeAPI';

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
    comment_date: string,
    sentiment: number;
}

function DetailBook({route, navigation}): React.JSX.Element {
    const [databook, setdatabook] = useState<DetailBook>();
    const [comments, setcomments] = useState<DataComment[]>([]);
    const { idbook } = route.params;

    const [star, setstar] = useState(0);
    const [content, setcontent] = useState("");
    const [msg, setmsg] = useState('');
    useEffect(() => {
        getDataBook(idbook).then(async result => {
            await setdatabook(result);
        });
        getComment(idbook).then(async result => {
            await setcomments(result);
        });
    }, []);

    const handlePressStar = (numstar: number) => {
        setstar(numstar);
    }
    const handlePressComment = async () => {
        await postComment(idbook, content, star).then(result => {
            if (result){
                setmsg('');
                setcontent("");
                setstar(0);
                getComment(idbook).then(async result => {
                    await setcomments(result);
                getDataBook(idbook).then(async result => {
                    await setdatabook(result);
                });
                });
            }
            else {setmsg('Không thể comment!');}
        })
    }
    const handleaddBookLove = () => {
        addBookLove(idbook).then(result => {
            if (result){
                getDataBook(idbook).then(async result => {
                    await setdatabook(result);
                });
            }
        })
    }
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header buttonback={true}/>
        <View style={selfstyle.container}>
            <View style={selfstyle.box_title}>
                <Text style={selfstyle.title}>Thông tin sách</Text>
                <TouchableOpacity onPress={handleaddBookLove}>
                    <Text style={{color: '#FF6666', fontWeight: '400'}}>+ Yêu Thích</Text>
                </TouchableOpacity>
            </View>
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
            <View style={selfstyle.box_describe}>
            <Text style={[selfstyle.describe, selfstyle.text_content]}>{databook?.describe}</Text>
            </View>
            <View style={selfstyle.box_title}><Text style={selfstyle.title}>Bình luận</Text></View>
            <SafeAreaView style={selfstyle.box_comment}>
                {comments.length > 0 && 
                <ScrollView >
                {comments.map((item, index) => (
                    <Comment 
                        key={index}
                        user={item.name} 
                        star={item.score}
                        content={item.content} 
                        sentiment={item.sentiment}
                    />
                ))}
                </ScrollView>}
                <View style={addcomment.box_addcomment}>
                    <View style={addcomment.content_comment}>
                        <TextInput style={addcomment.input_addcomment}
                        multiline={true} // Cho phép nhiều dòng
                        numberOfLines={2} // Số dòng mặc định hiển thị
                        textAlignVertical="top"
                        value={content}
                        spellCheck={false} // Tắt kiểm tra chính tả
                        autoCorrect={false}
                        onChangeText={(text)=>{setcontent(text)}}/>
                        <View style={addcomment.boxstar_comment}>
                            <TouchableOpacity style={addcomment.item_star}
                                onPress={() => {handlePressStar(1)}}>
                                <ImageBackground style={addcomment.img_star} source={star>=1?require('../Image/star.png'):require('../Image/star_white.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={addcomment.item_star}
                                onPress={() => {handlePressStar(2)}}>
                                <ImageBackground style={addcomment.img_star} source={star>=2?require('../Image/star.png'):require('../Image/star_white.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={addcomment.item_star}
                                onPress={() => {handlePressStar(3)}}>
                                <ImageBackground style={addcomment.img_star} source={star>=3?require('../Image/star.png'):require('../Image/star_white.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={addcomment.item_star}
                                onPress={() => {handlePressStar(4)}}>
                                <ImageBackground style={addcomment.img_star} source={star>=4?require('../Image/star.png'):require('../Image/star_white.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={addcomment.item_star}
                                onPress={() => {handlePressStar(5)}}>
                                <ImageBackground style={addcomment.img_star} source={star>=5?require('../Image/star.png'):require('../Image/star_white.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={addcomment.box_submit} onPress={handlePressComment}>
                        <Text style={addcomment.text_submit}>Bình luận</Text>
                    </TouchableOpacity>
                </View>
                {msg != '' && <Text>{msg}</Text>}
            </SafeAreaView>
        </View>
    </ScrollView>
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
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        height: 'auto',
        marginBottom: 10,
    },

})
export default DetailBook;
