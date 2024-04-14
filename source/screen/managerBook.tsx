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
import ManagerCard from './managerCard'; 
function ManagerBook(): React.JSX.Element {

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={selfstyle.header}>
            <Text style={selfstyle.title}>Quản Lý Sách</Text>
            <TouchableOpacity style={selfstyle.button}>
                <Text style={selfstyle.text_button}>Thêm Sách</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={selfstyle.list_book}>
            <ManagerCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={1} >
            </ManagerCard>
            <ManagerCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={2} >
            </ManagerCard>
            <ManagerCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={3} >
            </ManagerCard>
            <ManagerCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={4} >
            </ManagerCard>
            <ManagerCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={3} >
            </ManagerCard>
            <ManagerCard title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                indexcard={4} >
            </ManagerCard>
        </ScrollView>
    </View>
  );
}
const selfstyle = StyleSheet.create({
    header: {
        width: '90%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomColor: '#06AFAA',
        borderBottomWidth: 0.5,
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        paddingHorizontal: 10,
        color: '#06AFAA'
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
    },
    button: {

    },
    text_button: {
        color: '#06AFAA'
    }
})
export default ManagerBook;
