import React from 'react';import {
    Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type StockBook = {
    title: string;
    category: string[];
    describe: string;
    indexcard: number;
}

function CardBook({title, category, describe, indexcard}: StockBook): React.JSX.Element {
  return (
    <TouchableOpacity style={[styles.container,indexcard%2 === 0?styles.container_color1:styles.container_color2 ]}>
        <View style={[styles.box_img,indexcard%2 === 0?styles.box_img_color1:styles.box_img_color2]}>
            <ImageBackground style={styles.img} source={require('./source/Image/book.png')}/>
        </View>
        <View style={styles.box_content}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.category}>
            {category.map((category, index) => (
                <Text style={[styles.text_category, indexcard%2 === 0?styles.text_category_color1:styles.text_category_color2]} key={index}>{category}</Text>
            ))}
            </View>
            <View style={styles.box_describe}>
                <Text style={styles.text_describe}>{describe}</Text>
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
        borderRadius: 30,
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
        width: '32%',
        height: 120,
        borderRadius: 30,
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
        width: '80%',
        height: '80%',
    },
    box_content: {
        width: '68%',
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
    }
});

export default CardBook;
