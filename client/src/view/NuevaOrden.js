import React from 'react'
import { Text, View } from 'react-native'
import stylesGlobal from '../styles/globalStyles'
import {LinearGradient} from 'expo-linear-gradient';

const NuevaOrden = () => {
  return (
    <>
    <LinearGradient 
      colors={['#641e49', '#2e0c21']} 
      start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
      style={stylesGlobal.container}>
      <Text>Hola</Text>
    </LinearGradient>
    </>
  )
}

export default NuevaOrden