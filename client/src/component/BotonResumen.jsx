import React from 'react';
import {View, StyleSheet} from 'react-native';

const BotonResumen = () => {
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
