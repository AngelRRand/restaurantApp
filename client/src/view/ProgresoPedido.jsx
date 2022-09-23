import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import stylesGlobal from '../styles/stylesGlobal.jsx';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import PedidosbaseContext from '../context/pedidos/pedidosContext';
const ProgresoPedido = () => {
  
  const { idpedido } = useContext(PedidosbaseContext)

  return (

    <LinearGradient
      colors={['#0f0f0f', '#3d1515']}
      style={stylesGlobal.container}>

      <View style={stylesGlobal.contenido}>
        
      </View>

    </LinearGradient>
  )
}

export default ProgresoPedido