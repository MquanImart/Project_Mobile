import { StyleSheet } from "react-native";

const addcomment = StyleSheet.create({
    box_addcomment: {
        width: '100%',
        height: 'auto',
        borderRadius: 20,
        backgroundColor: '#06AFAA',
        marginVertical: 10,
        flexDirection: 'row',
    },
    content_comment: {
        width: '70%'
    },
    input_addcomment: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 20,
    },
    boxstar_comment: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    item_star: {
        width: 20,
        height: 20,
        marginHorizontal: 5
    },
    img_star: {
        width: 20,
        height: 20,
    },
    box_submit: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_submit: {
        color: 'white',
        fontWeight: '500'
    }
})
export default addcomment;