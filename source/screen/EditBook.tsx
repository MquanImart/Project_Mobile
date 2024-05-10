import React, { useEffect, useState } from 'react';
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
import { Dropdown } from 'react-native-element-dropdown';
import dropstyle from './dropdown';
import { getAllGenre } from '../API/genreAPI';
import { getDataSearch } from '../API/searchAPI';
import { postAddBook } from '../API/nxbAPI';

type Data = {
    label: string;
    value: string;
}

function EditBook({route, navigation}): React.JSX.Element {
    const { action } = route.params;
    const [listgenre, setlistgenre] = useState<Data[]>([]);
    const [valuecategory, setValuecategory] = useState<string | null>(null);
    const [isFocuscategory, setIsFocuscategory] = useState(false);
    const [genre, setgenre] = useState<string | null>(null);
    
    const [namebook, setnamebook] = useState("");
    const [author, setauthor] = useState("");
    const [describe, setdescribe] = useState("");
    const [img, setimg] = useState("");

    useEffect(() => {
        getDataSearch().then(result => {
            const transformedGenreData: Data[] = result.genre.map((item: { genre_name: any; }, index: number) => ({
                label: item.genre_name,
                value: (index + 1).toString(),
            }));
            setlistgenre(transformedGenreData);
        });
        if (action == "Edit"){
            console.log("Edit");
        }
    }, []);

    const HandleAddBook = () => {
        postAddBook(namebook,genre, author,describe, img).then(result => {
            console.log(result);
        })
    }
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header/>
        <View style={selfstyle.container}>
            <View style={selfstyle.box_title}>
                <Text style={selfstyle.title}>Thêm sách</Text>
            </View>
            <View style={selfstyle.box_info}>
            <View style={selfstyle.box_content}>
                    <Text style={selfstyle.label}>Tên:</Text>
                    <TextInput style={[selfstyle.text_content, selfstyle.size_input_small]}
                    value={namebook}
                    onChangeText={(text) => {setnamebook(text);}}/>
                </View>
                <View style={selfstyle.box_category}>
                    <Text style={[selfstyle.label, {alignSelf: 'center'}]}>Thể Loại: </Text>
                    <Dropdown
                        style={[selfstyle.size_dropdown,isFocuscategory && { borderColor: 'blue' }]}
                        placeholderStyle={selfstyle.dropdownTextStyle}
                        selectedTextStyle={selfstyle.dropdownTextStyle}
                        inputSearchStyle={dropstyle.inputSearchStyle}
                        iconStyle={dropstyle.iconStyle}
                        data={listgenre}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocuscategory ? 'Choose' : '...'}
                        searchPlaceholder="Search..."
                        value={valuecategory}
                        onFocus={() => setIsFocuscategory(true)}
                        onBlur={() => setIsFocuscategory(false)}
                        onChange={async item => {
                            setValuecategory(item.value);
                            setgenre(item.label);
                            setIsFocuscategory(false);
                        }}
                    />
                </View>
                <View style={selfstyle.box_content}>
                    <Text style={selfstyle.label}>Tác giả:</Text>
                    <TextInput style={[selfstyle.text_content, selfstyle.size_input_small]}
                    value={author}
                    onChangeText={(text) => {setauthor(text);}}/>
                </View>
                <View style={selfstyle.box_content}>
                    <Text style={selfstyle.label}>Hình ảnh:</Text>
                    <TextInput style={[selfstyle.text_content, selfstyle.size_input_small]}
                    value={img}
                    onChangeText={(text) => {setimg(text);}}/>
                </View>
            </View>
            <View style={selfstyle.box_title}><Text style={selfstyle.title}>Mô tả</Text></View>
            <TextInput style={[selfstyle.text_content, selfstyle.describe]}
            multiline={true} // Cho phép nhiều dòng
            numberOfLines={8} // Số dòng mặc định hiển thị
            textAlignVertical="top"
            value={describe}
            onChangeText={(text) => {setdescribe(text);}}/>
        </View>
        <View style={selfstyle.box_button}>
            <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}
            >
                <Text style={styles.item_textcontent}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item_button, selfstyle.size_button]}
            onPress={HandleAddBook}>
                <Text style={styles.item_textcontent}>Lưu</Text>
            </TouchableOpacity>
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
        paddingHorizontal: 10,
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
        marginVertical: 10,
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
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    size_input_small: {
        width: '70%',
    },
    describe: {
        textAlign: 'left',
        height: 200,
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
    box_button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    size_button: {
        width: 120,
        height: 50,
    },
    dropdownTextStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: "#06AFAA"
      },
      size_dropdown: {
        width: '60%',
      }
})
export default EditBook;
