import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PedidosbaseContext from '../context/pedidos/pedidosContext';
import stylesGlobal from '../styles/stylesGlobal.jsx';

const DetallesPlato = () => {

  const { plato } = useContext(PedidosbaseContext)
  console.log(plato)
  const { nombre, categoria, description, imagen, precio } = plato
  return (
    <LinearGradient
      colors={['#0f0f0f', '#3d1515']}
      style={stylesGlobal.container}>
      <View style={stylesGlobal.contenido}>
        <View style={[stylesGlobal.separator, styles.containerText]}>
          <Text style={stylesGlobal.titulo}>{nombre}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: imagen }} />
        </View>
        <View style={[stylesGlobal.separator, styles.containerText]}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  text:{
    color: 'white',
    fontSize:20
  }
})

export default DetallesPlato;