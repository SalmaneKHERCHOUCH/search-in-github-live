import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const fetchUser = async (username) => {
    const response = await fetch(`http://9101-2a01-e34-ec09-8f10-1022-f460-4796-dce6.ngrok.io/api/users/SalmaneKHERCHOUCH`);
    const data = await response.json();

    console.log(data);
  }

  fetchUser("Test");

  return (
    <View style={styles.container}>
      <Text>Hello !</Text>
      <Text>${data}</Text>
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
  },
});
