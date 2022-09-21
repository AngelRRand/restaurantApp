import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import PedidosbaseContext from '../context/pedidos/pedidosContext';
import stylesGlobal from '../styles/stylesGlobal.jsx';
import { AntDesign } from '@expo/vector-icons';
const FormularioPlato = () => {
  return (
    <LinearGradient
      colors={['#0f0f0f', '#3d1515']}
      style={stylesGlobal.container}>
      <View style={stylesGlobal.contenido}>
        <View style={[stylesGlobal.separator, styles.containerText]}>
          <Text style={stylesGlobal.titulo}>Pedido</Text>
        </View>
        <View style={[stylesGlobal.separator, styles.containerPlus]}>
          <Pressable style={stylesGlobal.btn}>
            <AntDesign name="plus" size={24} color="#fcdc75" />
          </Pressable>
          <TextInput
            value='1'
          />
          <Pressable style={stylesGlobal.btn}>
            <AntDesign name="minus" size={24} color="#fcdc75" />
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  containerText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerPlus: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 30
  }
})

export default FormularioPlato