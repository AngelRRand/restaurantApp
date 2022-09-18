import React from 'react'
import { Text, View } from 'react-native'
import stylesGlobal from '../styles/globalStyles'
import { LinearGradient } from 'expo-linear-gradient';

const NuevaOrden = () => {
  return (
    <>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={stylesGlobal.container}>
        <Text>Hola</Text>
      </LinearGradient>
    </>
  )
}

export default NuevaOrden