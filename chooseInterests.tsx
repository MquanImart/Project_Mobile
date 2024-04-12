import React from 'react';
import styles from './styles_login';
import {
    StyleSheet,
    Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
function chooseInterests(): React.JSX.Element {

  return (
    <View style={{flex: 1}}>
        <View style={[selfstyles.box_item, {flex: 1}]}>
            <Text style={selfstyles.title}>Hãy Chọn sở thích của bạn</Text>
            <Text style={selfstyles.describe}>Nhận các nội dung liên quan đến bạn</Text>
        </View>
        <View style={[selfstyles.box_item, {flex: 5}]}>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Sách thiếu nhi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Lịch sử</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Khoa học</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Văn hóa, xã hội</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Nấu ăn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Giải trí</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Tôn giáo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Văn học</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Tâm lý, tình cảm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Giáo dục</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Tiểu thuyết</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Khoa học viễn tưởng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Thiên Văn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={selfstyles.interest}>
                <Text style={selfstyles.text_inter}>Đời sống</Text>
            </TouchableOpacity>
        </View>
        <View style={[selfstyles.box_item, selfstyles.box_button, {flex: 1}]}>
            <TouchableOpacity style={[selfstyles.button, {backgroundColor: '#ccc'}]}>
                <Text style={[styles.item_textcontent, {color: 'black'}]}>Bỏ Qua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[selfstyles.button, {backgroundColor: '#62D5C4'}]}>
                <Text style={styles.item_textcontent}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const selfstyles = StyleSheet.create({
    box_item: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
        color: 'black',
    },
    describe: {
        fontSize: 17,
        fontWeight: '400',
        color: '#000',
    },
    interest: {
        height: 50,
        width: 'auto',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
    },
    text_inter: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500'
    },
    button: {
        width: '40%',
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_button: {
        justifyContent: 'space-around'
    }
})
export default chooseInterests;
