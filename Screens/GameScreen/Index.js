import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';
import { Card, NumberContainer } from '../../components/Index';
import { styles } from './styles';

const generateRandomNumber = (min, max, excluded) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === excluded) {
        return generateRandomNumber(min, max, excluded);
    } else {
         return randomNumber;
    }
};

const GameScreen = ({userOptions}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 99, userOptions));


    return (
        <View style={styles.container}>
            <Text>La suposicion del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => null} color={themes.colors.primary} />
                <Button title="Mayor" onPress={() => null} color={themes.colors.primary} />
            </Card>
        </View>
    );
}

export default GameScreen;