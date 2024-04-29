import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 270,
        justifyContent: 'center',
        alignItems:'center',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    titlelogo: {
        flexDirection: 'row',
    },
    title_text: {
        fontSize: 35,
        fontWeight: '900'
    },
    container: {
        width: '100%',
        height: 526,
    },
    box_item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box_iteminput: {
        flex: 1.5, 
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    item_title:{
        fontSize: 25,
        fontWeight: '700',
        color: '#fff'
    },
    item_textinput: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    large_button: {
        width: '70%',
        height: 60,
    },
    small_button: {
        width: '35%',
        height: 50,
    },
    item_button: {
        backgroundColor: '#62D5C4',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item_href: {
        width: 150,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_textcontent: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
    },
    item_texthref: {
        color: '#8CF1B1',
        fontWeight: '700',
        fontSize: 18,
    },
    item_groupinput: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    item_textlabel: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 17,
    },
    resgister: {
        width: '100%',
        height: 796,
    }
});

export default styles;
