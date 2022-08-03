import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setTask} from '../redux/action'

const Task = ({navigation}) => {
  const [title, setTitle] = React.useState('')
  const [desc, setDesc] = React.useState('')

  const {tasks, tasksID} = useSelector(state => state.reducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    getingTask()
  },[])

  const addTask =() =>{
      let newTask = {
        id: tasksID,
        title: title,
        desc: desc
      }
      const index = tasks.findIndex(item => item.id == tasksID )
      let Taskarr = []
      if(index > -1){
        Taskarr =[...tasks]
        Taskarr[index] = newTask
      }else{
        Taskarr =[...tasks, newTask]
      }
      dispatch(setTask(Taskarr))
      navigation.goBack()
  }
  const getingTask = () =>{
    const Task = tasks.find(task => task.id == tasksID)
    if(Task){
      setTitle(Task.title)
      setDesc(Task.desc)
    }
  }
  return (
    <View style={styles.container}>
        <TextInput style={styles.textInput}
        value={title}
        placeholder='write what are the things you have to do'
        onChangeText={e => setTitle(e)}
        multiline/>
        <TextInput style={styles.textInput}
        value={desc}
        placeholder='write some description'
        onChangeText={e => setDesc(e)}
          multiline/>
      <TouchableOpacity style={styles.wrapText}
      onPress={() => addTask()}
      >
        <Text style={styles.text}>Save Task</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
       alignItems:"center"
    },
    textInput:{
        height:50,
        width:'100%',
        borderRadius:25,
        backgroundColor:"white",
        marginVertical: 10,
        justifyContent:"center",
        borderWidth:1,
        padding: 10
    },
    wrapText:{
        height:50,
        width:"80%",
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"orange",
        borderRadius: 20,
    },
    text:{
        fontSize:20,
        color:"white",
        fontWeight:"700",
    }
})
export default Task