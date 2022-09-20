import React, { useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PedidosbaseContext from '../context/pedidos/pedidosContext';

const DetallesPlato = () => {

  const {plato} = useContext(PedidosbaseContext)
  console.log(plato.nombre)
  return (
    <View>
      <Text>{plato.categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default DetallesPlato;
