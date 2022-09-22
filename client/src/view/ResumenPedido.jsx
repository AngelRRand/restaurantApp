import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import PedidosbaseContext from '../context/pedidos/pedidosContext';
import stylesGlobal from '../styles/stylesGlobal.jsx';
import CardPedidos from '../component/CardPedidos';

const ResumenPedido = () => {

  const { pedido, total, enseñarResumen } = useContext(PedidosbaseContext)

  return (
    <LinearGradient
      colors={['#0f0f0f', '#3d1515']}
      style={stylesGlobal.container}>

      <View style={stylesGlobal.contenido}>
        <View style={[stylesGlobal.separator, styles.containerText]}>
          <Text style={[stylesGlobal.titulo]}>Pedidos</Text>
        </View>
        <View style={stylesGlobal.separator}>

          <FlatList
            data={pedido}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (

                <CardPedidos item={item} />
              )
            }}
          />

        </View>

        <View style={[stylesGlobal.separator, styles.containerText]}>
          <View>
            <Text style={styles.text}>Total a pagar: {total}</Text>
          </View>
        </View>
      </View>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  containerText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    color: '#fcdc75',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2
  }
});

export default ResumenPedido