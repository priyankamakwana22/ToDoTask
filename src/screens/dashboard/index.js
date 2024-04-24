import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import {useMemo, useState} from 'react';

import styles from './style';
import {addTodo} from '../../redux/Action';
import ListComponent from '../ListComponent';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Keyboard} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import RadioGroup from 'react-native-radio-buttons-group';

const Heading = props => {
  return (
    <View style={styles.txtBorder}>
      <Text style={styles.txt}>{props.title}</Text>
    </View>
  );
};

const Dashboard = () => {
  const todoData = useSelector(state => state.todoData);
  console.log('🚀 ~ Dashboard ~ todoData:', todoData);

  let dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
  let [update, setUpdate] = useState(false);
  const [selectedId, setSelectedId] = useState(''); // for radio button

  console.log('Update', update);

  const handleClickOnTodo = (item, index) => {
    setUpdate(true);
    openModal();
    setTitle(item.title);
    setDescription(item.description);
    setSelectedId(item.selectedId);
    setCurrentId(item.id);
  };

  console.log('🚀 ~ Dashboard ~ todoData:', currentId);
  console.log('🚀 ~ Dashboard ~ todoData:', selectedId);
  const updateDone = () => {
    let newData = {
      id: currentId,
      title: title,
      description: description,
      selectedId: selectedId,
    };
    console.log('🚀 ~ updateDone ~ newData:', newData);

    console.log('Updated');
    let newTodo;
    newTodo = [...todoData];
    let index;

    index = todoData.findIndex(item => item.id === currentId);

    console.log(index);
    if (selectedId !== todoData[index].selectedId) {
      newTodo.splice(index, 1);
      newTodo.push(newData);
    } else {
      newTodo[index] = newData;
    }
    dispatch(addTodo(newTodo));
    setTitle('');
    setDescription('');
    setShowModal(false);
    setUpdate(false);
  };

  const handleAddTodo = () => {
    {
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
    }
  };
  const handleClickEvent = () => {
    Keyboard.dismiss(); // To close the keyboard
    if (update) {
      updateDone();
    } else {
      handleAddTodo();
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
        id: '1',
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
    <View style={{flex: 1}}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <View>
            <Heading title="Todo" />
            <ListComponent
              selectedId="1"
              deleteTask={deleteTask}
              handleClickOnTodo={handleClickOnTodo}
              todoData={todoData}
            />

            <Heading title="In Progress" />
            <ListComponent
              selectedId="2"
              deleteTask={deleteTask}
              handleClickOnTodo={handleClickOnTodo}
              todoData={todoData}
            />

            <Heading title="Testing" />
            <ListComponent
              selectedId="3"
              deleteTask={deleteTask}
              handleClickOnTodo={handleClickOnTodo}
              todoData={todoData}
            />

            <Heading title="Done" />
            <ListComponent
              selectedId="4"
              deleteTask={deleteTask}
              handleClickOnTodo={handleClickOnTodo}
              todoData={todoData}
            />
          </View>
        </View>
      </ScrollView>
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
          <TouchableOpacity
            style={styles.modalView}
            activeOpacity={1}
            pointerEvents="none">
            {' '}
            // so that the modal does not close
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
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dashboard;
