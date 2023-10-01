import React from 'react'
import { StyleSheet, Text, View,Linking, Image, Touchable, TouchableOpacity } from 'react-native'

export default function Actioncard() {
    function openwebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>
            <View style={styles.header}>
                <Text style={styles.headerText}>What`s new in JavaScript 21-ES12</Text>
            </View>
            <Image source={require('../download.png')}
            style={styles.cardImage}
             />
             <View style={styles.cardbody}>
                <Text numberOfLines={3} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium minus dicta nostrum modi laudantium repellendus pariatur id veniam facilis nesciunt quo blanditiis, minima consequuntur nisi?</Text>
             </View>
             <View style={styles.cardfooter}>
                <TouchableOpacity
                onPress={()=>openwebsite('https://reactnativeelements.com/docs/2.3.2/card')}>
                <Text style={styles.links}>Read More!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>openwebsite('https://reactnativeelements.com/docs/2.3.2/card')}>
                <Text style={styles.links}>Follw Me!</Text>
                </TouchableOpacity>
             </View>
             {/* <View style={styles.cardfooter}>
                <TouchableOpacity
                onPress={()=>openwebsite('https://reactnativeelements.com/docs/2.3.2/card')}>
                <Text style={styles.links}>Follw Me!</Text>
                </TouchableOpacity>
             </View> */}
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
        marginBottom:10,
    },
    card:{
        borderRadius:8,
        height:380,
        width:314,
        backgroundColor:'#fc6f03',
        marginHorizontal:20,
    },
    elevatedCard:{
        elevation:3,
    },
    header:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold'
    },
    cardImage:{
        height:200,
    },
    cardbody:{
        padding:10,
    },
    cardfooter:{
        padding:8,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-evenly',

    },
    links:{
        fontSize:14,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:8,
    },

})