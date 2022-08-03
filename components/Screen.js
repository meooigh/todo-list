import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Screen= ({navigation}) => {
  React.useEffect(
    () =>{
        setTimeout(() => {
            navigation.replace('Home')
        }, 2000);
    }
, [])
  return (
    <View style={styles.container}>
      <Image style={styles.image}
            source={{
                uri:"https://cdn3.vectorstock.com/i/1000x1000/29/67/to-do-list-color-icon-vector-28812967.jpg"
            }}
      />
          <Text style={styles.text}>TODO LIST</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFEA00",
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        height:200,
        width:200,
        marginTop:40,
        borderRadius:30
    },
    text:{
      fontSize:40,
      fontWeight:"700",
      color:"white"
    }
})
export default Screen