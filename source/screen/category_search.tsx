import React, { useEffect, useRef, useState } from 'react';
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
import dropstyle from './dropdown';
import Header from './header';
import { getDataGenre, postSearchGenre } from '../API/searchAPI';
import { Typebook } from './home';

type Data = {
    label: string;
    value: string;
}

function CategorySearch({navigation}): React.JSX.Element {
    const [result_search, setresult_search] = useState<Typebook[]>([]);
    const [valuecategory, setValuecategory] = useState<string | null>(null);
    const [isFocuscategory, setIsFocuscategory] = useState(false);
    const flatListRef = useRef<FlatList>(null);
    
    const [datagenre, setdatagenre] = useState<Data[]>([]);
    useEffect(() => {
      getDataGenre().then(result => {
          const transformedGenreData: Data[] = result.map((item: { genre_name: any; }, index: number) => ({
              label: item.genre_name,
              value: (index + 1).toString(),
          }));
          setdatagenre(transformedGenreData);
      });
      postSearchGenre(null).then(result => {
        setresult_search(result);
      });
    }, []);

    const handleGenrePress = async (genre_name: React.SetStateAction<string | null>) => {
      await postSearchGenre(genre_name).then(result => {
        setresult_search(result);
    });
    }

    const handleResetPress = () => {
      setValuecategory(null);
      postSearchGenre(null).then(result => {
        setresult_search(result);
        
      });
    }
    const handlePress = (id: any) => {
      navigation.navigate("Detail Book", {
          idbook: id,
        });
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header buttonback={false}/>
        <View style={selfstyle.box_title}>
            <TouchableOpacity onPress={handleResetPress}>
              <Text style={selfstyle.title_search}>Thể Loại</Text>
              </TouchableOpacity>
            <Dropdown
                  style={[isFocuscategory && { borderColor: 'blue' }]}
                  placeholderStyle={selfstyle.dropdownTextStyle}
                  selectedTextStyle={selfstyle.dropdownTextStyle}
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
                  onChange={async item => {
                    setValuecategory(item.value);
                    setIsFocuscategory(false);
                    await handleGenrePress(item.label);

                    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
                  }}
                />
        </View>
        <SafeAreaView style={selfstyle.list_book}>
        <FlatList
              data={result_search}
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

    box_title: {
        width: '90%',
        alignSelf: 'center',
        borderBottomColor: '#06AFAA',
        borderBottomWidth: 1,
    },
    title_search: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        paddingVertical: 10,
    },
    title: {
        fontSize: 25,
        color: '#06AFAA',
        fontWeight: '800',
        paddingHorizontal: 10,
    },
    list_book: {
        width: '100%',

    },
    dropdownTextStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: "#06AFAA"
      },
})
export default CategorySearch;
