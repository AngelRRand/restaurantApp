import React from 'react';
import { Button, Text, View } from 'react-native'
import stylesGlobal from '../styles/stylesGlobal.jsx';
import { LinearGradient } from 'expo-linear-gradient';

const NuevaOrden = () => {
  return (
    <>
      <LinearGradient
        colors={['#0f0f0f', '#1d1d1d', '#421b53']}
        style={stylesGlobal.container}>
        <View>
          <Button
            title="Learn More"
            color="#841584"
          />
        </View>
      </LinearGradient>
    </>
  )
}

export default NuevaOrden