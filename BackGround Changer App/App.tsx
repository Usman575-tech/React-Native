import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const[randomColor, setRandomColor]= useState('#ffffff')

  const colorGenerator = () => {
    const haxRange = '0123456789ABCDF'
    let color = "#"

    for(let i=0; i<6;i++){
      color += haxRange.charAt(Math.floor(Math.random() * 16))
    }
    setRandomColor(color)
    }
  return (
    <>
    <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container, {backgroundColor:randomColor}]}>
      <TouchableOpacity onPress={colorGenerator}>
        <View style={styles.button}>
          <Text style={styles.buttonTxt}>Click Me!</Text>
        </View>
      </TouchableOpacity>
    </View>

   </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:"center",
  },
  button:{
    backgroundColor:'#00ff95',
    padding:12,
    borderRadius:6,
  },
  buttonTxt:{
    fontWeight:"bold",
    fontSize: 20,
  }
})