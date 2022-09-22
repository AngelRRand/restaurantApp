import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'
const BotonResumen = () => {
    const navigation = useNavigation()
    return (
        <Pressable>
            <Text style={styles.text}>Tu pedido</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#fcdc75",
        textAlign: 'center',
        fontSize: 20,
        letterSpacing: 3
      }
})

export default BotonResumen;
