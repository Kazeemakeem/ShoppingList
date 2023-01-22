import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
      <Text style={styles.text}>{title}</Text>
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          style={{styles.img}}/> */}
    </View>
  )
}

// comes handy for any missing props where the component is rendered.

Header.defaultProps = {
  title: "Shopping List"
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: '#fff', 
    fontSize: 23,
    textAlign: 'center'
  },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2
  // }
})



export default Header
