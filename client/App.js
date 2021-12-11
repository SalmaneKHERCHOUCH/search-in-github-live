import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

  const [user, setUser] = useState({});
  const [newgit, setNewGit] = useState({});

  const fetchUser = async (username) => {
    const response = await fetch(`http://localhost:4242/api/users/${username}`);
    const data = await response.json();

    setUser(data.data.body)
    console.log("On visualise les données de l'utilisateur github", data);
    
  }

  //fetchUser("Test");



  return (
    <View style={styles.container}>
      <Text>Hello, please enter your name Github !</Text>

      <TextInput
       placeholder='Enter your name github'
       onChangeText={newgit => setNewGit(newgit)}
       value = {newgit}
       />      

      <Button title='Send' 
      onPress={ async ()=>{
      fetchUser(newgit)
      }}>

      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
