import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ item }) => {

    const { nombre, categoria, description, imagen, precio } = item

    return (
        <View style={styles.container}>
            <View style={styles.contenido}>

                <View>
                    <Image style={styles.image} source={{ uri: imagen }} />
                </View>
                <View style={styles.containerText}>

                    <Text style={styles.text}>{nombre}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    contenido:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'white'
    },
    containerText:{
        alignItems:'center',
        flex: 1,
    },
    image: {
        width: 200,
        height: 150,
        resizeMode:'cover'
    },
    text: {
        color: 'white'
    }
})

export default Card;
