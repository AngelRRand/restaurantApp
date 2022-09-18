import React from 'react'
import { Text, View } from 'react-native'
import stylesGlobal from '../styles/globalStyles'
import { LinearGradient } from 'expo-linear-gradient';

const NuevaOrden = () => {
  return (
    <>
      <LinearGradient
        colors={['#1d1d1d', '#0f0f0f', '#421b53']}
        style={stylesGlobal.container}>
        <Text>Hola</Text>
      </LinearGradient>
    </>
  )
}

export default NuevaOrden