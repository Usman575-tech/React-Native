import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Flatcard() {
  return (
    <View>
        <Text style= {styles.heading}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    container: {
        flex:1,
        flexDirection:'row',
        padding:5,
    },
    card :{
        flex:1,
        margin:4,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        width:100,
        height:100
    },
    cardOne:{
        backgroundColor:'#FE0000',
    },
    cardTwo:{
        backgroundColor:'#6499E9',
    },
    cardThree:{
        backgroundColor:'#82CD47',
    }

})