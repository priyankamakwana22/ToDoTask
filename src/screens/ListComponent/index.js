import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ListComponent = props => {
  return (
    <TouchableOpacity onPress={props.openModal}>
      <View style={styles.flView}>
        <View style={{}}>
          <View>
            <Text numberOfLines={1} style={styles.listTitle}>
              {props.title}
            </Text>
            <Text numberOfLines={3} style={styles.listDesc}>
              {props.description}
            </Text>
          </View>
          {/* <View style={{right: 4,alignItems:'flex-end'}} > */}
          <TouchableOpacity onPress={() => props.deleteTask()} style={{}}>
            <FontAwesome5 name={'trash'} size={24} color={'red'} />
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListComponent;
