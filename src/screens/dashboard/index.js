import {useMemo, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';
import {addNote} from '../../redux/Action';
import {RadioButton} from 'react-native-paper';

const Dashboard = () => {
  const tasks = useSelector(state => state.tasks);
  let dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(''); // for radio button
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleClickEvent = () => {
    if (selectedId == '') {
      Alert.alert('Warning !', 'Select any one from the options given');
    } else if (title == '') {
      Alert.alert('Warning !', 'Please enter a title for the note');
    } else if (description == '') {
      Alert.alert('Warning !', 'Please enter a description for the note');
    } else {
      setShowModal(false);
      let todoData = {
        title: title,
        description: description,
        selectedId: selectedId,
      };
      dispatch(addNote(todoData));
      setTitle('');
      setDescription('');
    }
  };

  const openModal = () => {
    setShowModal(true);
    setTitle('');
    setDescription('');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // will have unique key
        label: 'To do',
        value: 'option1',
      },
      {
        id: '2',
        label: 'In Progress',
        value: 'option2',
      },
      {
        id: '3',
        label: 'Testing',
        value: 'option3',
      },
      {
        id: '4',
        label: 'Done',
        value: 'option4',
      },
    ],
    [],
  );

  return (
    <View style={styles.container}>
      <View>
      <View style={styles.txtBorder}>
        <Text style={styles.txt}>To Do</Text>
      </View>

      <FlatList
        data={tasks}
        renderItem={({item}) => {
          console.log('🚀 ~ Dashboard ~ item:', item);
          if (item.selectedId === '1') {
            return (
              <View style={styles.flView}>
                <Text numberOfLines={1} style={styles.listTitle}>{item.title}</Text>
                <Text numberOfLines={3} style={styles.listDesc}>{item.description}</Text>
              </View>
            );
          }
        }}
      />

      <View style={styles.txtBorder}>
        <Text style={styles.txt}>In Progress</Text>
      </View>
      
      <FlatList
        data={tasks}
        renderItem={({item}) => {
          console.log('🚀 ~ Dashboard ~ item:', item);
          if (item.selectedId === '2') {
            return (
              <View style={styles.flView}>
                <Text numberOfLines={1}  style={styles.listTitle}>{item.title}</Text>
                <Text numberOfLines={3}  style={styles.listDesc}>{item.description}</Text>
              </View>
            );
          }
        }}
      />
      <View style={styles.txtBorder}>
        <Text style={styles.txt}>Testing</Text>
      </View>

      <FlatList
        data={tasks}
        renderItem={({item}) => {
          console.log('🚀 ~ Dashboard ~ item:', item);
          if (item.selectedId === '3') {
            return (
              <View style={styles.flView}>
                <Text numberOfLines={1}  style={styles.listTitle}>{item.title}</Text>
                {/* <View style={{height: 1, borderWidth:1, width:'100%', borderColor: 'gray'}} ></View> */}
                <Text numberOfLines={3}  style={styles.listDesc}>{item.description}</Text>
              </View>
            );
          }
        }}
      />
      <View style={styles.txtBorder}>
        <Text style={styles.txt}>Done</Text>
      </View>

      <FlatList
        data={tasks}
        renderItem={({item}) => {
          console.log('🚀 ~ Dashboard ~ item:', item);
          if (item.selectedId === '4') {
            return (
              <View style={styles.flView}>
                <Text  numberOfLines={1} style={styles.listTitle}>{item.title}</Text>
                <Text numberOfLines={3}  style={styles.listDesc}> {item.description}</Text>
              </View>
            );
          }
        }}
      />
      </View>
      <TouchableOpacity style={styles.plusBtn} onPress={() => openModal()}>
        <FontAwesome5 name={'plus'} size={25} color={'#000000'} />
      </TouchableOpacity>
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        transparent>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => closeModal()}>
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
              value={description}
              onChangeText={description => setDescription(description)}
            />
            <View style={styles.radio}>
            <RadioGroup
              style={styles.radio}
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
            </View>
            {/* <View style={styles.radioGroup}>
              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="option1"
                  status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedValue('option1')}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>ReactJS</Text>
              </View>

              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="option2"
                  status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedValue('option2')}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>NextJs</Text>
              </View>

              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="option3"
                  status={selectedValue === 'option3' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedValue('option3')}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>React Native</Text>
              </View>
            </View> */}

            <View style={styles.btns}>
              <Pressable style={styles.modalBtn} onPress={() => closeModal()}>
                <Text style={styles.modalText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.modalBtn}
                onPress={() => handleClickEvent()}>
                <Text style={styles.modalText}>Done</Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

// const mapStateToProps = state => {
//   return {
//     Title: state.title,
//     Description: state.description,
//     Tasks: state.tasks,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addNote: () => {
//       dispatch({
//         type: 'ADD_NOTE',
//         payload: {title, description},
//       });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Dashboard;
