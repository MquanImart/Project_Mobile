import React from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import {
  ImageBackground,
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
function Home(): React.JSX.Element {

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header/>
        <View style={selfstyle.container}>
            <View style={selfstyle.box_title}><Text style={selfstyle.title}>Thông tin sách</Text></View>
            <View style={selfstyle.box_info}>
                <Text style={selfstyle.name_book}>The Elements of Typographic Style</Text>
                <View style={selfstyle.box_category}>
                    <View style={selfstyle.category}><Text style={selfstyle.text_category}>Khoa học</Text></View>
                    <View style={selfstyle.category}><Text style={selfstyle.text_category}>Thiết kế đồ họa</Text></View>
                    <View style={selfstyle.category}><Text style={selfstyle.text_category}>Văn phòng</Text></View>
                    <View style={selfstyle.category}><Text style={selfstyle.text_category}>Đời sống xã hội</Text></View>
                </View>
                <View style={selfstyle.box_content}>
                    <Text style={selfstyle.label}>Tác giả:</Text>
                    <Text style={selfstyle.text_content}>Robert Bringhurst</Text>
                </View>
                <View style={selfstyle.box_content}>
                    <Text style={selfstyle.label}>Quốc Gia:</Text>
                    <Text style={selfstyle.text_content}>Cannada</Text>
                </View>
                <View style={selfstyle.box_feedback}>
                    <View style={selfstyle.box_icon}>
                        <ImageBackground style={selfstyle.imgicon} source={require('./source/Image/heart.png')}/>
                        <Text style={selfstyle.text_content}>32</Text>
                    </View>
                    <View style={selfstyle.box_icon}>
                        <ImageBackground style={selfstyle.imgicon} source={require('./source/Image/star.png')}/>
                        <Text style={selfstyle.text_content}>4.5</Text>
                    </View>
                    <View style={selfstyle.box_icon}>
                        <ImageBackground style={selfstyle.imgicon} source={require('./source/Image/comment.png')}/>
                        <Text style={selfstyle.text_content}>12</Text>
                    </View>
                </View>
            </View>
            <View style={selfstyle.box_title}><Text style={selfstyle.title}>Mô tả</Text></View>
            <Text style={[selfstyle.describe, selfstyle.text_content]}>Được dịch từ tiếng Anh-The Elements of Typographic Style là 
            một cuốn sách về kiểu chữ và phong cách của nhà sắp chữ, nhà thơ và dịch giả người Canada Robert Bringhurst.
            Được xuất bản lần đầu vào năm 1992 bởi Nhà xuất bản Hartley & Marks, nó đã được sửa đổi vào các năm 1996, 2001, 
            2002, 2004, 2005, 2008 và 2012.</Text>
            <View style={selfstyle.box_title}><Text style={selfstyle.title}>Bình luận</Text></View>
            <View style={selfstyle.box_comment}>
                <Comment user='Phan Minh Quân' star={5} content='Một cuốn sách rất hay và bổ ích'></Comment>
                <Comment user='Nguyễn Bảo Quốc' star={4} content='VCl'></Comment>
                <Comment user='Thái Thanh Hưng' star={4.5} content='phong cách của nhà sắp chữ, nhà thơ và dịch giả người Canada Robert Bringhurst'></Comment>
            </View>
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

    }
})
export default Home;
