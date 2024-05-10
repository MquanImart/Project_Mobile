import { StyleSheet } from "react-native";

const dropstyle = StyleSheet.create({
dropdown: {
    height: 50,
    width: '45%',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingLeft: 30,
    backgroundColor: '#EBEDEF',
    fontSize: 18,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: '500'
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
})

export default dropstyle;