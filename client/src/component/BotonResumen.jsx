import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'
const BotonResumen = () => {
    const navigation = useNavigation()
    return (
        <Pressable style={styles.btn} onPress={()=>navigation.navigate('resumenPedido')}>
            <Text style={styles.text}>Tu pedido</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn:{
        marginHorizontal:40
    },
    text: {
        color: "#fcdc75",
        textAlign: 'center',
        fontSize: 20,
        letterSpacing: 3
      }
})

export default BotonResumen;
