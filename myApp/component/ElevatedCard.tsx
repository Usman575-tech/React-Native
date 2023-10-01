import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ElevatedCard() {
  return (
    <View>
    <View>
        <Text style= {styles.heading}>Elevated Card</Text>
    </View>
    <ScrollView horizontal={true}>
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
    </ScrollView>
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
        elevation:40,
    },
    cardTwo:{
        backgroundColor:'#6499E9',
        elevation:40,
    },
    cardThree:{
        backgroundColor:'#82CD47',
        elevation:40,
    }

})