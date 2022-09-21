import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'
import PedidosbaseContext from '../context/pedidos/pedidosContext';
import stylesGlobal from '../styles/stylesGlobal.jsx';

const FormularioPlato = () => {
  return (
    <LinearGradient
      colors={['#0f0f0f', '#3d1515']}
      style={stylesGlobal.container}>
        <View style={stylesGlobal.contenido}>
            
        </View>
      </LinearGradient>
  )
}

export default FormularioPlato