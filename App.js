import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Header } from './components/Index.js';
import StartGame from './Screens/start-game/Index.js';
import {styles} from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Header title= "Adivina el numero" />
      <StartGame />
    </View>
    </SafeAreaView>
  );
}

