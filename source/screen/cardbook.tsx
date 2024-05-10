import React from 'react';import {
    Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type StockBook = {
    pressButton: Function;
    title: string;
    link_img: string;
    category: string[];
    describe: string;
    view: number;
    indexcard: number;
}

function CardBook({pressButton, title, link_img, category, describe, view, indexcard}: StockBook, navigation: { navigate: (arg0: string, arg1: { id: any; }) => void; }): React.JSX.Element {
    
    const handlePress = () => {
        pressButton();
    }
    return (
    <TouchableOpacity style={[styles.container,indexcard%2 === 0?styles.container_color1:styles.container_color2 ]} 
    onPress={handlePress}>
        <View style={[styles.box_img,indexcard%2 === 0?styles.box_img_color1:styles.box_img_color2]}>
            <ImageBackground style={styles.img} source={{ uri: link_img }}/>
        </View>
        <View style={styles.box_content}>
            <Text style={styles.title}
            numberOfLines={2} // Số dòng tối đa bạn muốn hiển thị
            ellipsizeMode='tail'
            >{title}</Text>
            <View style={styles.category}>
            {category.map((category, index) => (
                <Text style={[styles.text_category, indexcard%2 === 0?styles.text_category_color1:styles.text_category_color2]} key={index}>{category}</Text>
            ))}
            </View>
            <View style={styles.box_describe}>
                <Text style={styles.text_describe}
                numberOfLines={3} // Số dòng tối đa bạn muốn hiển thị
                ellipsizeMode='tail' // Thêm dấu "..." ở cuối nếu văn bản quá dài
                >{describe}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 120,
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 10,
    },
    container_color1:{
        backgroundColor: 'rgba(6,175,170,0.2)',
    },
    container_color2:{
        backgroundColor: 'rgba(103,224,147,0.2)',
    },
    box_img: {
        width: '20%',
        height: 120,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_img_color1: {
        backgroundColor: "#06AFAA",
    },
    box_img_color2: {
        backgroundColor: "#67E093",
    },
    img: {
        width: '100%',
        height: '100%',
    },
    box_content: {
        width: '80%',
        padding: 5,
    },
    title: {
        color: '#3C3C3C',
        fontSize: 18,
        fontWeight: '600'
    },
    category: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text_category: {
        color: '#06AFAA',
        paddingRight: 10,
    },
    text_category_color1:{
        color: '#3DE379',
    },
    text_category_color2:{
        color: '#06AFAA',
    },
    box_describe: {
        width: '100%',
    },
    text_describe: {
        fontSize: 10,
        color: 'black'
    },
});

export default CardBook;
