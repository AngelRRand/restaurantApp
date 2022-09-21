import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
        <View style={[stylesGlobal.separator, styles.containerTitulo]}>
          <Text style={stylesGlobal.titulo}>{nombre}</Text>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerTitulo:{
    justifyContent:'center',
    alignItems:'center'
  }
})

export default DetallesPlato;
