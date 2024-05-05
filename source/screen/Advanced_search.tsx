import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import dropstyle from './dropdown';
import Header from './header';
import { Dropdown } from 'react-native-element-dropdown';
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



const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

function Advanced_search(): React.JSX.Element {

    const [valuecategory, setValuecategory] = useState<string | null>(null);
    const [isFocuscategory, setIsFocuscategory] = useState(false);

    const [valueauthor, setValueauthor] = useState<string | null>(null);
    const [isFocusauthor, setIsFocusauthor] = useState(false);

    const [valuesort, setValuesort] = useState<string | null>(null);
    const [isFocussort, setIsFocussort] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header/>
        <View style={{flex: 1}}>
            <View style={selfstyle.box_search}>  
                <TouchableOpacity style={[selfstyle.icon_search]}>
                    <ImageBackground style={selfstyle.img_icon} source={require('../Image/find.png')}/>
                </TouchableOpacity>
                <TextInput style={selfstyle.input_search}
                    placeholder='Tên sách' placeholderTextColor='#A6A6A6'></TextInput>
                <TouchableOpacity style={selfstyle.icon_search}>
                    <ImageBackground style={selfstyle.img_icon} source={require('../Image/camera.png')}/>
                </TouchableOpacity>
            </View>
            <View style={selfstyle.box_selected}>
                <Dropdown
                  style={[dropstyle.dropdown, isFocuscategory && { borderColor: 'blue' }]}
                  placeholderStyle={dropstyle.placeholderStyle}
                  selectedTextStyle={dropstyle.selectedTextStyle}
                  inputSearchStyle={dropstyle.inputSearchStyle}
                  iconStyle={dropstyle.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocuscategory ? 'Thể Loại' : '...'}
                  searchPlaceholder="Search..."
                  value={valuecategory}
                  onFocus={() => setIsFocuscategory(true)}
                  onBlur={() => setIsFocuscategory(false)}
                  onChange={item => {
                    setValuecategory(item.value);
                    setIsFocuscategory(false);
                  }}
                />
                <Dropdown
                  style={[dropstyle.dropdown, isFocusauthor && { borderColor: 'blue' }]}
                  placeholderStyle={dropstyle.placeholderStyle}
                  selectedTextStyle={dropstyle.selectedTextStyle}
                  inputSearchStyle={dropstyle.inputSearchStyle}
                  iconStyle={dropstyle.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocusauthor ? 'Tác giả' : '...'}
                  searchPlaceholder="Search..."
                  value={valueauthor}
                  onFocus={() => setIsFocusauthor(true)}
                  onBlur={() => setIsFocusauthor(false)}
                  onChange={item => {
                    setValueauthor(item.value);
                    setIsFocusauthor(false);
                  }}
                />
            </View>
            <View style={[selfstyle.box_search]}>
                <Dropdown
                      style={[dropstyle.dropdown,{width:'90%'}, isFocussort && { borderColor: 'blue' }]}
                      placeholderStyle={dropstyle.placeholderStyle}
                      selectedTextStyle={dropstyle.selectedTextStyle}
                      inputSearchStyle={dropstyle.inputSearchStyle}
                      iconStyle={dropstyle.iconStyle}
                      data={data}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocussort ? 'Sắp xếp theo' : '...'}
                      searchPlaceholder="Search..."
                      value={valuesort}
                      onFocus={() => setIsFocussort(true)}
                      onBlur={() => setIsFocussort(false)}
                      onChange={item => {
                        setValuesort(item.value);
                        setIsFocussort(false);
                      }}
                    />
            </View>
            <View style={selfstyle.box_button}>
                <TouchableOpacity style={[selfstyle.box_search, {backgroundColor: '#06AFAA', width: '45%'}]}>
                    <Text style={styles.item_textcontent}>Tìm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[selfstyle.box_search, {backgroundColor: '#06AFAA', width: '45%'}]}>
                    <Text style={styles.item_textcontent}>Reset</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={selfstyle.list_book}>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                view={1}
                indexcard={1} >
            </CardBook>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                view={1}
                indexcard={2} >
            </CardBook>
            <CardBook title='The Elements of Typographic Style' 
                category={['Đồ họa', 'Văn phòng']} 
                describe='Là một tác phẩm kinh điển của ngành thiết kế. Sách được trình bày đẹp mắt kết hợp với các phần thực hành, lý thuyết, lịch sử, triết lý và sự hiểu biết về các kiểu chữ. ' 
                view={1}
                indexcard={3} >
            </CardBook>
        </ScrollView>
        </View>
        
    </View>
  );
}
const selfstyle = StyleSheet.create({
    
    img_icon: {
        width: '100%',
        height: '100%'
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
    box_selected: {
        width: '90%',height: 50,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    
    box_textinput: {
        width: '70%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: '#EBEDEF',
        alignItems: 'center',
    },
    box_author:{
        backgroundColor: '#ccc'
    },
    box_textauthor: {
        width: '30%',
        alignItems: 'center'
    },
    text_author: {
        color: 'black',
        fontWeight: '800'
    },
    search_textinput: {
        width: '80%',
        color: '#404040'
    },
    list_book: {
        borderTopWidth: 1,
        borderColor: '#06AFAA'
    },
    box_button: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
    }
})
export default Advanced_search;
