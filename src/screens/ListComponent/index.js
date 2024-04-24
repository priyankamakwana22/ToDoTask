import { View,FlatList, Text, TouchableOpacity,  } from "react-native";
import { useSelector } from "react-redux";
import styles from "../dashboard/style";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ListComponent = (props) => {
  console.log("🚀 ~ ListComponent ~ props:", props)
  const todoData =  useSelector(state => state.todoData)
  console.log("🚀 ~ ListComponent ~ todoData:", todoData)
  return(
    <FlatList
              nestedScrollEnabled={true}
              data={todoData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                if (item.selectedId === props.selectedId) {
                  return (
                    <TouchableOpacity
                      onPress={() => handleClickOnTodo(item, index)}>
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
                          <FontAwesome5
                            name={'trash'}
                            size={25}
                            color={'red'}
                          />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  );
                }
              }}
            />
  );
}

export default ListComponent;