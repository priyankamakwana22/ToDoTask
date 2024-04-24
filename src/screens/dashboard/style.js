import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: { marginTop: 20, margin: 10},
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
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ACE1AF',
    backgroundColor: '#00308F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 50,
  },
  txt: {fontSize: 20, fontWeight: 'bold', color: '#ffff'},

  //modal
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000090',
  },
  modalView: {
    height: 500,
    width: 350,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    alignItems: 'center',
    padding: 15,
  },
  radioView: {
    alignItems: 'flex-start',
    marginTop: 40,
    marginLeft: 20,
    width: '100%',
  },
  btns: {flexDirection: 'row', gap: 40},
  modalText: {fontSize: 20, color: '#000000', fontWeight: '500'},
  modalInput: {
    fontSize: 20,
    color: '#000000',
    borderRadius: 20,
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  modalBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    width: 90,
    height: 45,
    borderRadius: 10,
    marginTop: 40,
  },

  //flatlist
  flView: {
    borderColor: '#6CB4EE',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    margin: 20,
    padding: 15,
    alignItems: 'center',

    // justifyContent:'center'
  },
  listTitle: {fontSize: 30, fontWeight: '500', color: '#000000'},
  listDesc: {fontSize: 18, color: '#000000', marginLeft: 15, marginTop: 10},
});

export default styles;
