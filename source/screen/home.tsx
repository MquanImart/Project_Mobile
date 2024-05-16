import React, { useEffect, useState } from 'react';

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
import { getHistory, getHot, getLoveBook, getPropose } from '../API/proposeAPI';
import HeaderSelf from './header';
import { selectImage } from '../API/imgbook';
import { postSearchImage, postSearchText } from '../API/searchAPI';
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
export type Typebook = {
    id: number;
    genre_id: number;
    title: string;
    author: string;
    post_date: string;
    describes: string;
    img_link: string;
    view: number;
    active: number;
    genre_name: string;
}
function Home({navigation}): React.JSX.Element {
    const [listpropose, setlistpropose] = useState<Typebook[]>([]);
    const [focus_propose, setfocus_propose] = useState(1);
    const [image, setImage] = useState<string>("");
    const [text, settext] = useState("");

    const handleSearchText = async () => {
        postSearchText(text).then(result => {
            setlistpropose(result);
        })
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
            const selectedImage = response.assets[0];
            const uri = selectedImage.uri || null;
            setImage(uri);
            if (uri) {
                try {
                    const base64String = await RNFS.readFile(image, 'base64');
                    postSearchImage(base64String).then(result=>{
                        setlistpropose(result);
                    })
                  } catch (error) {
                    console.error('Error converting image to base64: ', error);
                  }
            }
          }
        });
      };
    useEffect(() => {
        getPropose().then(propose => {
            setlistpropose(propose);
        });
    }, []);
    const handleProposePress = () => {
        setfocus_propose(1);
        getPropose().then(propose => {
            setlistpropose(propose);
        });
    }
    const handleHotPress = () => {
        setfocus_propose(2);
        getHot().then(listbook => {
            setlistpropose(listbook);
        });
    }
    const handleHistoryPress = () => {
        setfocus_propose(3);
        getHistory().then(listbook => {
            setlistpropose(listbook);
        });
    }
    const handleLovePress = () => {
        setfocus_propose(4);
        getLoveBook().then(listbook => {
            setlistpropose(listbook);
        });
    }

    const handlePress = (id: any) => {
        navigation.navigate("Detail Book", {
            idbook: id,
          });
    }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <HeaderSelf buttonback={false} />
        <View style={selfstyle.box_search}>
            <TouchableOpacity style={[selfstyle.icon_search]}
            onPress={handleSearchText}>
                <ImageBackground style={selfstyle.img_icon} source={require('../Image/find.png')}/>
            </TouchableOpacity>
            <TextInput style={selfstyle.input_search} value={text}
            onChangeText={(text)=>{settext(text)}}
                placeholder='Tên sách' placeholderTextColor='#A6A6A6'/>
            <TouchableOpacity style={selfstyle.icon_search} onPress={handleselectImage}>
                <ImageBackground style={selfstyle.img_icon} source={require('../Image/camera.png')}/>
            </TouchableOpacity>
        </View>
        <View style={selfstyle.box_propose}>
            <TouchableOpacity onPress={handleProposePress}>
                <Text style={[selfstyle.text_propose, focus_propose == 1?{color: '#06AFAA'}:{}]}>Đề xuất</Text></TouchableOpacity>
            <TouchableOpacity onPress={handleHotPress}>
                <Text style={[selfstyle.text_propose, focus_propose == 2?{color: '#06AFAA'}:{}]}>Hot</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleHistoryPress}>
                <Text style={[selfstyle.text_propose, focus_propose == 3?{color: '#06AFAA'}:{}]}>Đã xem</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={handleLovePress}>
                <Text style={[selfstyle.text_propose, focus_propose == 4?{color: '#06AFAA'}:{}]}>Yêu Thích</Text>
                </TouchableOpacity>
        </View>
        <SafeAreaView style={selfstyle.list_book}>
            <FlatList
              data={listpropose}
              renderItem={({item, index}) => 
              <CardBook 
              pressButton={() => handlePress(item.id)}
              title={item.title} 
              link_img={item.img_link}
              category={[item.genre_name]} 
              describe={item.describes}
              view={item.view}
              indexcard={index} />}
              keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
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

    },
    textmsg: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center'
    }
})
export default Home;
