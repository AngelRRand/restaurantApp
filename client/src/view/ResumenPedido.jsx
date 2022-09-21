import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'
import PedidosbaseContext from '../context/pedidos/pedidosContext';
import stylesGlobal from '../styles/stylesGlobal.jsx';

const ResumenPedido = () => {
  return (
    <View>
      <Text>ResumenPedido</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default ResumenPedido