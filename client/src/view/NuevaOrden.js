import React from 'react';
import { Text, View } from 'react-native'
import stylesGlobal from '../styles/stylesGlobal.jsx';
import { LinearGradient } from 'expo-linear-gradient';

const NuevaOrden = () => {
  return (
    <>
      <LinearGradient
        colors={['#0f0f0f', '#1d1d1d', '#421b53']}
        style={stylesGlobal.container}>
        <Text>Hola</Text>
      </LinearGradient>
    </>
  )
}

export default NuevaOrden