import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', marginTop: 20},
    plusBtn: {
      height: 60,
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 50,
      bottom: 20,
      right: 20,
      position: 'absolute',
      elevation: 10,
    },
    txtBorder: {
      width: '90%',
      borderWidth: 1,
      borderColor: '#ACE1AF',
      margin: 10,
      backgroundColor: '#ACE1AF90',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      height: 50,
    },
    txt: {fontSize: 20, fontWeight: 'bold', color: '#000000'},
    centeredView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00000090',
    },
    modalView: {
      height: 300,
      width: 350,
      backgroundColor: '#ffffff',
      borderRadius: 30,
      alignItems: 'center',
      padding: 20,
    },
    btns:{flexDirection: 'row', gap: 40},
    modalText: {fontSize: 20, color: '#000000', fontWeight: '500'},
    modalInput : {fontSize: 20, color: '#000000',borderRadius: 20, borderWidth: 1, width: '90%', marginTop: 20, paddingLeft: 15, paddingRight: 15},
    modalBtn : {alignItems: 'center', justifyContent:'center', backgroundColor: 'lightblue', width: 90, height: 45, borderRadius: 10, marginTop: 40   }
  });

export default styles;