import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import styles from './styles_login';
import dropstyle from './dropdown';
import Header from './header';
import { Dropdown } from 'react-native-element-dropdown';
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
import { getDataSearch, postSearchAdvanced, postSearchImage } from '../API/searchAPI';
import { Typebook } from './home';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

type Data = {
    'label': string,
    'value': string;
}
const data = [
    { label: 'Tên Sách A -> Z', value: '1' },
    { label: 'Tên Sách Z -> A', value: '2' },
    { label: 'Ngày phát hành mới nhất', value: '3' },
    { label: 'Ngày phát hành lâu nhất', value: '4' },
  ];

function Advanced_search({navigation}): React.JSX.Element {
    const [result_search, setresult_search] = useState<Typebook[]>([]);
    const [datagenre, setdatagenre] = useState<Data[]>([]);
    const [dataauthor, setdataauthor] = useState<Data[]>([]);

    const [genre, setgenre] = useState<string | null>(null);
    const [valuecategory, setValuecategory] = useState<string | null>(null);
    const [isFocuscategory, setIsFocuscategory] = useState(false);

    const [author, setauthor] = useState<string | null>(null);
    const [valueauthor, setValueauthor] = useState<string | null>(null);
    const [isFocusauthor, setIsFocusauthor] = useState(false);

    const [valuesort, setValuesort] = useState<string | null>(null);
    const [isFocussort, setIsFocussort] = useState(false);

    const [image, setImage] = useState<string>("");
    const [text, settext] = useState("");
    useEffect(() => {
        getDataSearch().then(result => {
            const transformedGenreData: Data[] = result.genre.map((item: { genre_name: any; }, index: number) => ({
                label: item.genre_name,
                value: (index + 1).toString(),
            }));
            setdatagenre(transformedGenreData);

            const transformedAuthorData: Data[] = result.author.map((item: { author: any; }, index: number) => ({
                label: item.author,
                value: (index + 1).toString(), 
            }));
            setdataauthor(transformedAuthorData);
        });
    }, []);

    const handleSearchPress = () => {
        postSearchAdvanced(text, genre, author, valuesort).then(result => {
            setresult_search(result);
        });
    }
    const handleResetPress = () => {
        setValuecategory(null);
        setgenre(null);
        setauthor(null);
        setValueauthor(null);
        setValuesort(null);
        settext("");
    }
    const handlePress = (id: any) => {
        navigation.navigate("Detail Book", {
            idbook: id,
          });
    }
    const handleselectImage = async () => {
        const options = {
          mediaType: 'photo',
          quality: 1,
        };
    
        launchImageLibrary(options, async (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
            const selectedImage = await response.assets[0];
            const uri = await selectedImage.uri || null;
            setImage(uri);
            if (uri) {
                try {
                    const base64String = await RNFS.readFile(image, 'base64');
                    postSearchImage(base64String).then(result=>{
                        setresult_search(result);
                    })
                  } catch (error) {
                    console.error('Error converting image to base64: ', error);
                  }
            }
          }
        });
      };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header buttonback={false}/>
        <View style={{flex: 1}}>
            <View style={selfstyle.box_search}>  
                <TouchableOpacity style={[selfstyle.icon_search]}>
                    <ImageBackground style={selfstyle.img_icon} source={require('../Image/find.png')}/>
                </TouchableOpacity>
                <TextInput style={selfstyle.input_search} value={text}
                    onChangeText={(text)=>{settext(text)}}
                    placeholder='Tên sách' placeholderTextColor='#A6A6A6'></TextInput>
                <TouchableOpacity style={selfstyle.icon_search}
                onPress={handleselectImage}>
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
                  data={datagenre}
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
                    setgenre(item.label);
                    setIsFocuscategory(false);
                  }}
                />
                <Dropdown
                  style={[dropstyle.dropdown, isFocusauthor && { borderColor: 'blue' }]}
                  placeholderStyle={dropstyle.placeholderStyle}
                  selectedTextStyle={dropstyle.selectedTextStyle}
                  inputSearchStyle={dropstyle.inputSearchStyle}
                  iconStyle={dropstyle.iconStyle}
                  data={dataauthor}
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
                    setauthor(item.label);
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
                <TouchableOpacity style={[selfstyle.box_search, {backgroundColor: '#06AFAA', width: '45%'}]}
                onPress={handleSearchPress}>
                    <Text style={styles.item_textcontent}>Tìm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[selfstyle.box_search, {backgroundColor: '#06AFAA', width: '45%'}]}
                onPress={handleResetPress}>
                    <Text style={styles.item_textcontent}>Reset</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={selfstyle.list_book}>
                <FlatList
                  data={result_search}
                  renderItem={({item, index}) => 
                  <CardBook title={item.title} 
                  link_img={item.img_link}
                  pressButton={()=> {handlePress(item.id)}}
                  category={[item.genre_name]} 
                  describe={item.describes}
                  view={item.view}
                  indexcard={index} />}
                  keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
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
