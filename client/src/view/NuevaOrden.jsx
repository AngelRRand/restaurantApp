import React from 'react';
import stylesGlobal from '../styles/stylesGlobal.jsx';
import { Button, Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'

const NuevaOrden = () => {

  const navigation = useNavigation()

  return (
    <>
      <LinearGradient
        colors={['#0f0f0f', '#3d1515']}
        style={stylesGlobal.container}>
        <View style={[stylesGlobal.contenido, styles.contenido]}>
          <Button
            title="Learn More"
            color="#da7531"
            onPress={()=> navigation.navigate('menu')}
          />
        </View>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  contenido:{
    flexDirection:'column',
    justifyContent:'center'
  }
})
export default NuevaOrden