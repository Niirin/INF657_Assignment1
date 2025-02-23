import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} >React Native 1st App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        header: {
            color: "#fff",
            fontSize: 30,
            margin: 10,
        },
        container: {
            backgroundColor: '#483d8b',
        }
})

export default Header;