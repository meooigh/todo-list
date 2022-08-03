import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {delTask, setTaskID} from '../redux/action'

const Todo = ({navigation}) => {
  const {tasks} = useSelector(state => state.reducer)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.wraprender}>
        <FlatList
          data={tasks}
          renderItem={ ({item}) =>
          <View style={{flex: 1, flexDirection:"row"}}>
            <TouchableOpacity style={styles.renderTodo}
            onPress={() => {
              dispatch(setTaskID(item.id))
              navigation.navigate('Task')}}
            >
            <View>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.desc} numberOfLines={1}>{item.desc}</Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity onPress={() =>dispatch(delTask(item.id))}>
              <Text style={{color:"red", marginVertical: 20}}>X</Text>
            </TouchableOpacity>
        </View>
        }
        keyExtractor={item => item.id}
      />
      </View>
      <TouchableOpacity style={styles.wrapButton} onPress={() => {
      dispatch(setTaskID(tasks.length + 1))
      navigation.navigate('Task')}
      }>
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  wrapButton:{
    height: 70,
    width: 70,
    backgroundColor:"dodgerblue",
    borderRadius:40,
    justifyContent:"center",
    alignItems:"center",
    position:'absolute',
    bottom: 10,
    right: 10
  },
  addButton:{
    fontSize:30,
    color:"white",
    fontWeight:"500"
  },
  wraprender:{
    position:"absolute",
    top: 10,
    left:10
  },
  renderTodo:{
    backgroundColor:"#ffffff",
    width:"90%",
    marginHorizontal:10,
    borderRadius: 15,
    marginVertical: 10,
    elevation: 5,
    borderRadius: 10,
    justifyContent:"center",
    padding: 8
  },
  title:{
    fontSize:25,
    fontWeight:'500',
    color:"orange",
    fontStyle:"italic"
  },
  desc:{
    fontSize:16
  },
})
export default Todo