import React, {useState} from 'react';
import { View, SafeAreaView } from 'react-native';
import { Header } from './components/Index.js';
import StartGame from './Screens/StartGame/Index.js';
import GameScreen from './Screens/GameScreen/Index.js';
import { styles } from './styles';


export default function App() {

    const [userNumber, setUserNumber] = useState();
    

  const onStartGame = (selectedNumber) => {
   setUserNumber(selectedNumber);
  };
  
    let content = <StartGame onStartGame={onStartGame} />;


    if (userNumber) {
        content = <GameScreen />;
    }
    
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Header title= "Adivina el numero" />
      {content}
    </View>
    </SafeAreaView>
  );
}
