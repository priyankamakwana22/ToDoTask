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
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';
import {addTodo} from '../../redux/Action';

const Dashboard = () => {
  const todoData = useSelector(state => state.todoData);
  console.log("🚀 ~ Dashboard ~ todoData:", todoData)

  let dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [selectedId, setSelectedId] = useState(''); // for radio button

  const handleClickEvent = () => {
    if (selectedId == '') {
      Alert.alert('Warning !', 'Select any one from the options given');
    } else if (title == '') {
      Alert.alert('Warning !', 'Please enter a title for the note');
    } else if (description == '') {
      Alert.alert('Warning !', 'Please enter a description for the note');
    } else {

      let newData = {
        id: new Date().getTime().toString(36),
        title: title,
        description: description,
        selectedId: selectedId,
      };

      let newTodo;
      newTodo = [...todoData, newData];
      dispatch(addTodo(newTodo));
      setTitle('');
      setDescription('');
      setShowModal(false);
    }
  };

  const openModal = () => {
    setShowModal(true);
    setTitle('');
    setDescription('');
    setSelectedId('');
  };

  const closeModal = () => {
    setShowModal(false);
    setTitle('');
    setDescription('');
    setSelectedId('');
  };

  // deleting the todo

  const deleteTask = id => {
    const filteredTasks = todoData.filter(task => task.id !== id);
    console.log('🚀 ~ deleteTask ~ filteredTasks:', filteredTasks);
    dispatch(addTodo(filteredTasks));
    Alert.alert('Deleted', 'Task deleted successfully');
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
    // <ScrollView nestedScrollEnabled={true}>
      <View style={styles.container}>
        <View>
          <View style={styles.txtBorder}>
            <Text style={styles.txt}>To Do</Text>
          </View>

          <FlatList
            data={todoData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              if (item.selectedId === '1') {
                return (
                  <TouchableOpacity onPress={handleClickEvent}>
                    <View style={styles.flView}>
                      <View style={{flex: 9}}>
                        <Text numberOfLines={1} style={styles.listTitle}>
                          {item.title}
                        </Text>
                        <Text numberOfLines={3} style={styles.listDesc}>
                          {item.description}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{flex: 1}}
                        onPress={() => deleteTask(item.id)}>
                        <FontAwesome5 name={'trash'} size={25} color={'red'} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              }
            }}
          />

          <View style={styles.txtBorder}>
            <Text style={styles.txt}>In Progress</Text>
          </View>

          <FlatList
            data={todoData}
            renderItem={({item}) => {
              if (item.selectedId === '2') {
                return (
                  <TouchableOpacity onPress={openModal}>
                    <View style={styles.flView}>
                      <View style={{flex: 9}}>
                        <Text numberOfLines={1} style={styles.listTitle}>
                          {item.title}
                        </Text>
                        <Text numberOfLines={3} style={styles.listDesc}>
                          {item.description}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{flex: 1}}
                        onPress={() => deleteTask(item.id)}>
                        <FontAwesome5 name={'trash'} size={25} color={'red'} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              }
            }}
          />
          <View style={styles.txtBorder}>
            <Text style={styles.txt}>Testing</Text>
          </View>

          <FlatList
            data={todoData}
            renderItem={({item}) => {
              if (item.selectedId === '3') {
                return (
                  <TouchableOpacity onPress={openModal}>
                    <View style={styles.flView}>
                      <View style={{flex: 9}}>
                        <Text numberOfLines={1} style={styles.listTitle}>
                          {item.title}
                        </Text>
                        <Text numberOfLines={3} style={styles.listDesc}>
                          {item.description}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{flex: 1}}
                        onPress={() => deleteTask(item.id)}>
                        <FontAwesome5 name={'trash'} size={25} color={'red'} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              }
            }}
          />
          <View style={styles.txtBorder}>
            <Text style={styles.txt}>Done</Text>
          </View>

          <FlatList
            data={todoData}
            renderItem={({item}) => {
              if (item.selectedId === '4') {
                return (
                  <TouchableOpacity onPress={openModal}>
                    <View style={styles.flView}>
                      <View style={{flex: 9}}>
                        <Text numberOfLines={1} style={styles.listTitle}>
                          {item.title}
                        </Text>
                        <Text numberOfLines={3} style={styles.listDesc}>
                          {item.description}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{flex: 1}}
                        onPress={() => deleteTask(item.id)}>
                        <FontAwesome5 name={'trash'} size={25} color={'red'} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
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
              <View style={styles.radioView}>
                <RadioGroup
                  labelStyle={{}}
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  containerStyle={{
                    alignItems: 'flex-start',
                  }}
                />
              </View>

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
    // </ScrollView>
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
