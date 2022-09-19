import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Card = ({item}) => {

    return (
        <View>
            <Text>{item.nombre}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Card;
