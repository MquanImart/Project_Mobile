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
import FavoriteCard from './favorite_card'; 
function FavoriteBook(): React.JSX.Element {

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={selfstyle.title}>Sách Yêu Thích</Text>
        <View style={selfstyle.box_search}>
            <TouchableOpacity style={[selfstyle.icon_search]}>
                <ImageBackground style={selfstyle.img_icon} source={require('../Image/find.png')}/>
            </TouchableOpacity>
            <TextInput style={selfstyle.input_search}
                placeholder='Tên sách' placeholderTextColor='#A6A6A6'></TextInput>
        </View>
        <ScrollView style={selfstyle.list_book}>
            <FavoriteCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={1} >
            </FavoriteCard>
            <FavoriteCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={2} >
            </FavoriteCard>
            <FavoriteCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={3} >
            </FavoriteCard>
            <FavoriteCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={4} >
            </FavoriteCard>
            <FavoriteCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={3} >
            </FavoriteCard>
            <FavoriteCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={4} >
            </FavoriteCard>
        </ScrollView>
    </View>
  );
}
const selfstyle = StyleSheet.create({
    self_header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button_icon: {
        width: 40,
        height: '55%',
    },
    img_icon: {
        width: '100%',
        height: '100%'
    },
    box_title: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        paddingHorizontal: 10,
        color: '#06AFAA'
    },
    box_search: {
        width: '90%',height: 50,
        marginVertical: 10,
        backgroundColor: '#EBEDEF',
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon_search: {
        width: 30,
        height: '50%'
    },
    input_search: {
        width: '60%',
    },
    box_propose: {
        width:'90%', height: 50,
        marginVertical: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text_propose: {
        fontSize: 20,
        fontWeight: '900',
        color: "#67E093"
    },
    list_book: {
        width: '100%',

    }
})
export default FavoriteBook;
