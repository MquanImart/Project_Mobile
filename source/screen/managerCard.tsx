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
    link_img: string;
}

function managerCard({title,link_img, category, describe, indexcard}: StockBook): React.JSX.Element {
  return (
    <View style={[styles.container,indexcard%2 === 0?styles.container_color1:styles.container_color2 ]}>
        <View style={[styles.box_img,indexcard%2 === 0?styles.box_img_color1:styles.box_img_color2]}>
            <ImageBackground style={styles.img} source={{uri: link_img}}/>
        </View>
        <View style={styles.box_content}>
            <Text style={styles.title}
            numberOfLines={2}
            ellipsizeMode='tail'
            >{title}</Text>
            <View style={styles.category}>
            {category.map((category, index) => (
                <Text style={[styles.text_category, indexcard%2 === 0?styles.text_category_color1:styles.text_category_color2]} key={index}>{category}</Text>
            ))}
            </View>
            <View style={styles.box_describe}>
                <Text style={styles.text_describe}
                numberOfLines={3}
                ellipsizeMode='tail'
                >{describe}</Text>
            </View>
        </View>
        <View style={[styles.box_button,indexcard%2 === 0?styles.boxbutton_color1:styles.boxbutton_color2]}>
            <TouchableOpacity style={styles.button}>
                <ImageBackground style={styles.img_button} source={require('../Image/edit.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <ImageBackground style={styles.img_button} source={require('../Image/hidden.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 120,
        alignSelf: 'center',
        borderRadius: 10,
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
        width: '70%',
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
    box_button: {
        width: '10%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    boxbutton_color1:{
        backgroundColor: 'rgba(6,175,170,0.3)',
    },
    boxbutton_color2:{
        backgroundColor: 'rgba(103,224,147,0.3)',
    },
    button: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_button: {
        width: '80%',
        height: '80%',
        marginStart: 5,
    }
});

export default managerCard;
