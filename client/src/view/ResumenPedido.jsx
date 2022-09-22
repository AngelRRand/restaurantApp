import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import PedidosbaseContext from '../context/pedidos/pedidosContext';
import stylesGlobal from '../styles/stylesGlobal.jsx';

const ResumenPedido = () => {

  const { pedido } = useContext(PedidosbaseContext)

  return (
    <LinearGradient
      colors={['#0f0f0f', '#3d1515']}
      style={stylesGlobal.container}>

      <View style={stylesGlobal.contenido}>
        <View style={[stylesGlobal.separator, styles.containerText]}>
          <Text style={[stylesGlobal.titulo]}>Pedidos</Text>
        </View>
        <View style={[stylesGlobal.separator, styles.containerText]}>

          <FlatList
            data={pedido}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              return (

                <Card item={item} index={index} mostrarHeading={mostrarHeading} seleccionarPlato={seleccionarPlato} />
              )
            }}
          />

        </View>

      </View>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({

});

export default ResumenPedido