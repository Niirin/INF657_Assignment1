import { StyleSheet, Button, Text, View } from 'react-native'
import React, {useState} from 'react'

const MyButton = () => {

    const [click, isClicked] = useState(false);
  return (
    <View style= {styles.buttonContainer}>
      <Button onPress= {() => {
        isClicked(!click);
      }}
      title= 'Click Me'/>
      <Text style={styles.headText}>{click ? 'Hello! Welcome to React Native 🌸' : ''}</Text>
    </View>
  )
}

export default MyButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    headText : {
      fontSize: 18,
      textAlign: 'center'
  }
});