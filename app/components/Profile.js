import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export const Profile = (props) =>  {
  return (
    <View style= {styles.container}>
        <Image source={require('../../assets/cute-anime-girl-pfp.jpg')} style = {styles.avatar}/>
        <Text style={styles.headText}>Hello, {props.name} here &#128075;</Text>
        <Text style={styles.headText}>Click button to see React Magic!</Text>
    </View>
  )
};


const styles = StyleSheet.create({
    avatar: {
        verticalAlign: 'middle',
        width: 60,
        height: 60,
        borderRadius: '50%',

    },
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    headText : {
        fontSize: 16,
    }
})