import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import PedidosbaseContext from '../context/pedidos/pedidosContext';
import stylesGlobal from '../styles/stylesGlobal.jsx';
import CardPedidos from '../component/CardPedidos';

const ResumenPedido = () => {
  const { pedido, total, enseñarResumen } = useContext(PedidosbaseContext)

  const navigation = useNavigation()
  useEffect(() => {
    calcularTotal()
  }, [pedido])

  const calcularTotal = () => {
    let newTotal = 0;
    newTotal = pedido.reduce((nuevo, articulo) => nuevo + articulo.total, 0)
    enseñarResumen(newTotal)
  }

  return (
    <LinearGradient
      colors={['#0f0f0f', '#3d1515']}
      style={stylesGlobal.container}>

      <View style={[stylesGlobal.contenido, styles.top]}>
        <View style={[stylesGlobal.separator, styles.containerText]}>
          <Text style={[stylesGlobal.titulo]}>Pedidos</Text>
        </View>
        <View style={stylesGlobal.separator}>

          <FlatList
            style={styles.flat}
            data={pedido}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              return (

                <CardPedidos item={item} key={index} />
              )
            }}
          />
          <Button
            title="Seguir Pidiendo"
            color="#da7531"
            onPress={() => navigation.navigate('menu')}
          />
        </View>

      </View>
      <View style={[stylesGlobal.separator, styles.containerText, styles.bot]}>
        <View>
          <Text style={styles.text}>Total a pagar: {total}</Text>
        </View>
        
        <Pressable style={[stylesGlobal.btn,{backgroundColor:'#fcdc75', width:'100%', marginVertical:20}]} onPress={() => navigation.navigate('menu')}>
          <Text style={[styles.text,{color:'black'}]}>Ordenar Pedido</Text>
        </Pressable>
      </View>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  containerText: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 22,
    color: '#fcdc75',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2
  },
  bot: {
    marginTop: 70,
    marginBottom: 40
  },
  top: {
    flex: 1,
    marginBottom: 50
  },
  btn: {
    marginVertical: 30,
    height: 200
  }
});

export default ResumenPedido