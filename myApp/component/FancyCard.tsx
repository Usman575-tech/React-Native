import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function fancyCard() {
    return (
        <View>
            <Text style={styles.heading}>Trending Places</Text>
                <View style={[styles.card, styles.elevated]}>
                <Image source={require('./download.png')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Minar-e-pakistan</Text>
                        <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum sit ipsam maiores?</Text>
                        <Text style={styles.cardFooter}>12 mint`s away</Text>
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
    card:{
        height:350,
        width:300,
        borderRadius:6,
        marginHorizontal:24,
        marginVertical:12,
    },
    elevated:{
        backgroundColor:'#000000',
        elevation:5,
    },
    cardImage:{
        marginTop:10,
        marginHorizontal:10,
        height:180,
        borderTopRightRadius:6,
        borderTopLeftRadius:6,

    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#ffffff',
        margin:8,
        fontSize:20,
        fontWeight:'bold',
    },
    cardDesc:{
        color:'#ffffff',
        margin:6,
        fontSize:18,
        flexShrink:1,
    },
    cardFooter:{
        color:'#ffffff',
        margin:6,
        fontSize:18,
    },
})