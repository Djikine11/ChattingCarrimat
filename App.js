import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button,Alert} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text >Bienvenue </Text>


      <StatusBar style="auto" />
      <TextInput placeholder="votre message" />

<Button title="envoyer" onPress={()=>Alert.alert('envoyé') } />



    </View>





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  },

});
