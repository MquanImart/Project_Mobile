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
function Home(): React.JSX.Element {

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={selfstyle.box_search}>
            <TouchableOpacity style={[selfstyle.icon_search]}>
                <ImageBackground style={selfstyle.img_icon} source={require('./source/Image/find.png')}/>
            </TouchableOpacity>
            <TextInput style={selfstyle.input_search}
                placeholder='Tên sách' placeholderTextColor='#A6A6A6'></TextInput>
            <TouchableOpacity style={selfstyle.icon_search}>
                <ImageBackground style={selfstyle.img_icon} source={require('./source/Image/camera.png')}/>
            </TouchableOpacity>
        </View>
        <View style={selfstyle.box_propose}>
            <TouchableOpacity><Text style={[selfstyle.text_propose, {color: '#06AFAA'}]}>Đề xuất</Text></TouchableOpacity>
            <TouchableOpacity><Text style={selfstyle.text_propose}>Hot</Text></TouchableOpacity>
            <TouchableOpacity><Text style={selfstyle.text_propose}>Đã xem</Text></TouchableOpacity>
            <TouchableOpacity><Text style={selfstyle.text_propose}>Yêu Thích</Text></TouchableOpacity>
        </View>
        <ScrollView style={selfstyle.list_book}>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={1} >
            </CardBook>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={2} >
            </CardBook>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={3} >
            </CardBook>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={4} >
            </CardBook>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={3} >
            </CardBook>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={4} >
            </CardBook>
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
        fontSize: 35,
        fontWeight: '900',
        paddingHorizontal: 10,
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
export default Home;
