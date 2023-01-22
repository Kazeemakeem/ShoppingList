import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({AddItem}) => {

  const [inputValue, setInputValue] = useState('')

  const updateTextInput = textValue => setInputValue(textValue)

  return (
    <View style={styles.header}>
      <TextInput placeholder='Add Item...'
      style={styles.input}
      onChangeText={updateTextInput} />
      <TouchableOpacity style={styles.btn}
        onPress={() => AddItem(inputValue)}>
        <Text style={styles.btnText}>
          <Icon name='plus' size={20} />Add Item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  }
})



export default AddItem