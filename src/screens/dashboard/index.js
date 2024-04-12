import {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Modal,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {connect} from 'react-redux';
import App from '../../../App';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  // const [title, setTitle] = useState('');
  // const [task, setTask] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const addNote = () => {
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        transparent
        hardwareAccelerated>
        <TouchableOpacity style={styles.centeredView} onPress={closeModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Note</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Title for note"
              value={title}
              onChangeText={title => setTitle(title)}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Note"
              value={task}
              onChangeText={task => setTask(task)}
            />
            <View style={styles.btns}>
              <Pressable style={styles.modalBtn} onPress={addNote}>
                <Text style={styles.modalText}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalBtn} onPress={addNote}>
                <Text style={styles.modalText}>Done</Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.txtBorder}>
        <Text style={styles.txt}>To Do</Text>
      </View>
      <View style={styles.txtBorder}>
        <Text style={styles.txt}>In Progress</Text>
      </View>
      <View style={styles.txtBorder}>
        <Text style={styles.txt}>Testing</Text>
      </View>
      <View style={styles.txtBorder}>
        <Text style={styles.txt}>Done</Text>
      </View>

      <TouchableOpacity style={styles.plusBtn} onPress={openModal}>
        <FontAwesome5 name={'plus'} size={25} color={'#000000'} />
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    taskId: state.id,
    title: state.title,
    task: state.task,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: () => {
      dispatch({type: 'ADD_NOTE' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
