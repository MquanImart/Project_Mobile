import React, { useState } from 'react';
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
import dropstyle from './dropdown';
function categorySearch(): React.JSX.Element {
    const [valuecategory, setValuecategory] = useState(null);
    const [isFocuscategory, setIsFocuscategory] = useState(false);

    const data = [
        { label: 'Khoa Học', value: '1' },
        { label: 'Xã Hội', value: '2' },
        { label: 'Đời sống', value: '3' },
        { label: 'Âm nhạc', value: '4' },
        { label: 'Khoa Học Viễn Tưởng', value: '5' },
        { label: 'Giáo Dục', value: '6' },
        { label: 'Giải Trí', value: '7' },
        { label: 'Xu hướng', value: '8' },
        { label: 'Tất Cả', value: '9' },
      ];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={selfstyle.box_title}>
            <Text style={selfstyle.title_search}>Thể Loại</Text>
            <Dropdown
                  style={[isFocuscategory && { borderColor: 'blue' }]}
                  placeholderStyle={selfstyle.dropdownTextStyle}
                  selectedTextStyle={selfstyle.dropdownTextStyle}
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
export default categorySearch;
