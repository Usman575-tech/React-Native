import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ContactList() {
    const Contact=[
        {
            uid:1,
            name:'Muhammad Usman',
            email:'usmanchaudhry@gmail.com',
            imageURL:'https://source.unsplash.com/random',
        },
        {
            uid:2,
            name:'Muhammad Noman',
            email:'nomanchaudhry@gmail.com',
            imageURL:'https://source.unsplash.com/random/nature',
        },
        {
            uid:3,
            name:'Muhammad Ali',
            email:'alichaudhry@gmail.com',
            imageURL:'https://source.unsplash.com/random/sport',

        },
        {
            uid:4,
            name:'Muhammad Mozam',
            email:'mozamchaudhry@gmail.com',
            imageURL:'https://source.unsplash.com/random',
        },
    
    ]
  return (
    <View>
      <Text style={styles.heading}>Contact-List</Text>
      <ScrollView
      scrollEnabled={false}
      style ={styles.container}
      >
        {Contact.map(({uid,name,email,imageURL})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageURL
                }} style={styles.imageURL}/>
               <View style={styles.cardBody}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
               </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10,
        marginVertical:8,
        color:'#000'
    },
    container:{},
    userCard:{
        backgroundColor:'#D2E0FB',
        margin:3,
        padding:6,
        flex:1,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
    },
    imageURL:{
        height:60,
        width:60,
        borderRadius:60/2,
    },
    cardBody:{
        marginHorizontal:8,
    },
    name:{
        color:'#000',
        fontSize:18,
        fontWeight:'bold',
    },
    email:{
        color:'#000',
        fontSize:16,
    },
})