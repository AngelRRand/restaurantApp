import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import PedidosbaseContext from '../context/pedidos/pedidosContext';
import stylesGlobal from '../styles/stylesGlobal.jsx';
import { AntDesign } from '@expo/vector-icons';
const FormularioPlato = () => {

  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);
  const { plato } = useContext(PedidosbaseContext)
  const {precio} = plato

  //Calcular el total a pagar 

  const calcularTotal = () =>{
    const totalPagar = precio * cantidad
    setTotal(totalPagar)
  }

  useEffect(() => {
    calcularTotal()
  }, [cantidad]);

  const restarUno = () =>{
    if(cantidad > 1 ){
      const nuevaCantidad = parseInt(cantidad) - 1;
    setCantidad(nuevaCantidad)
    }
  }
  const sumarUno = () =>{
    const nuevaCantidad = parseInt(cantidad) + 1;
    setCantidad(nuevaCantidad)
  }
  return (
    <LinearGradient
      colors={['#0f0f0f', '#3d1515']}
      style={stylesGlobal.container}>
      <View style={stylesGlobal.contenido}>
        <View style={[stylesGlobal.separator, styles.containerText]}>
          <Text style={stylesGlobal.titulo}>Pedido</Text>
        </View>
        <View style={[stylesGlobal.separator, styles.containerPlus]}>
          <Pressable style={stylesGlobal.btn} onPress={()=> restarUno()}>
            <AntDesign name="minus" size={30} color="#fcdc75" />
          </Pressable>
          <TextInput
            value={cantidad.toString()}
            onChangeText={(cant)=> setCantidad(cant)}
            keyboardType='numeric'
            style={styles.inputNum}
          />
          <Pressable style={stylesGlobal.btn} onPress={()=> sumarUno()}>
            <AntDesign  name="plus" size={30} color="#fcdc75" />
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
  },
  inputNum:{
    color: '#fcdc75', 
    borderBottomColor: '#fcdc75', 
    borderBottomWidth:2, 
    height:50, 
    width:100, 
    textAlign:'center'
  }
})

export default FormularioPlato