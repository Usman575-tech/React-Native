import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function AppPro() {
  return (
    <View style={style.container}>
      <Text style={style.text}>AppPro</Text>
    </View>
  );
};
const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        backgroundColor: 'red',
        borderRadius: 20,
        fontSize: 40,
    }
});
