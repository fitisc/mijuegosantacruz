import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Button } from 'react-native';
import { Card, Input } from '../../components/Index';
import {styles} from './styles';

const StartGame = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const onHandlerChangeText = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar Juego
            </Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.text}>Elija un numero</Text>
                <Input style={styles.input} placeholder="Ingresa un numero" keyboardType="numeric" 
                maxLength={2}
                blurOnSubmit={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredValue}
                onChangeText={(text) => onHandlerChangeText(text)}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Limpiar" color="#d81515" onPress={() => null} />
                    <Button title="Confirmar" color="#d81515" onPress={() => null} />
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGame;