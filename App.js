import React, { useState } from 'react'
import { View, Image, Text, Stylesheet, FlatList, Alert } from 'react-native'
import uuidv4 from 'uuidv4'
import Header from './components/Header'
import ListItem from './components/ListItem'

const App = () => {

  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Egg'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'}
  ])

  const deleteItem = (id) => {
    setItems(currItemsState => {
      return currItemsState.filter(item => item.id !== id)
    })
  }

  const AddItem = text => {
    if(!text){
      Alert.alert('Error', 'Please enter an item', { text: 'Ok'})
    }else{
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Arbitrary Prop'/>
      <AddItem AddItem={AddItem}/>
      <FlatList data={items} 
      // renderItem={({item}) => (<Text>{item.text}</Text>)}  Each item can be componentised as below
      renderItem={({item}) => <ListItem itemProp={item} deleteItem={deleteItem}/>}
      />
      
    </View>
  )
}

const styles = Stylesheet.create({
  container: {
    flex: 1, 
    paddingTop: 60, 
    // alignItems: center
  }
})
export default App
