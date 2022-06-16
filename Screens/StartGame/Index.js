import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native';
import { Card, Input, NumberContainer } from '../../components/Index';
import { Alert } from 'react-native';
import {styles} from './styles';
//import themes from '../../Constantes/themes.js';


const StartGame = (onStartGame) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    

    const onHandlerChangeText = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    }

    const onHandlerReset = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const onHandlerConfirm = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: onHandlerReset }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        

    };

    const confirmedOutPut = confirmed ? (
        <Card style={styles.inputContainer}>
            <Text>Tu seleccion</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button 
            title="Empezar juego" 
            onPress={() => onStartGame(selectedNumber)} 
            color= '#d81515' />
        </Card>
        ) : null;


    return (
        <TouchableWithoutFeedback 
        onPress={() => {
            Keyboard.dismiss()
            }}>
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar Juego
            </Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.text}>Elija un numero</Text>
                <Input 
                style={styles.input} 
                placeholder="Ingresa un numero" 
                keyboardType="numeric" 
                maxLength={2}
                blurOnSubmit={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredValue}
                onChangeText={(text) => onHandlerChangeText(text)}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Limpiar" color="#d81515" onPress={() => onHandlerReset()} />
                    <Button title="Confirmar" color="#d81515" onPress={() => onHandlerConfirm()} />
                </View>
            </Card>
            {confirmedOutPut}
        </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGame;