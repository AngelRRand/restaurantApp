import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ item }) => {

    const { nombre, categoria, description, imagen, precio, existencia } = item

    return (
        <View style={styles.container}>
            <View style={styles.contenido}>

                <View>
                    <Image style={styles.image} source={{ uri: imagen }} />
                </View>
                <View style={styles.containerInfo}>
                    <View style={[styles.spaceText, styles.name]}>
                        <Text style={[styles.text, styles.titulo]}>{nombre}</Text>
                    </View>
                    <View style={[styles.spaceText, styles.description]}>
                        <Text style={[styles.text]}>{description}</Text>
                    </View>
                    <View style={[styles.spaceText, styles.info]}>
                        <View>
                            <Text style={[styles.text]}>{categoria}</Text>
                        </View>
                        <View>
                            <Text style={[styles.text]}>${precio}</Text>
                        </View>
                        <View>
                            {existencia === true ? 
                            <Text style={{color:'#65ff6c'}}>Disponible</Text>
                            : 
                            <Text style={{color:'#ff4e4e'}}>No Stock</Text> 
                            }
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    contenido: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        height: 150,
    },
    containerInfo: {
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: 'cover'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    spaceText: {
        height: 40,
    },
    name: {
        marginTop: 10
    },
    titulo: {
        fontSize: 20
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    }
})

export default Card;
