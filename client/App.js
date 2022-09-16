import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetallesPlato from './src/view/DetallesPlato.js';
import FormularioPlato from './src/view/FormularioPlato.js';
import Menu from './src/view/Menu.js';
import NuevaOrden from './src/view/NuevaOrden.js';
import ProgresoPedido from './src/view/ProgresoPedido.js';
import ResumenPedido from './src/view/ResumenPedido.js';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#DA3DBF'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          }
        }}
      >
        <Stack.Screen
          name='nuevaOrden'
          component={NuevaOrden}
          options={{
            title: 'Nueva Orden'
          }}
        />
        <Stack.Screen
          name='menu'
          component={Menu}
          options={{
            title: 'Menu'
          }}
        />
        <Stack.Screen
          name='formularioPlato'
          component={FormularioPlato}
          options={{
            title: 'Formulario Plato'
          }}
        />
        <Stack.Screen
          name='detallesPlato'
          component={DetallesPlato}
          options={{
            title: 'Detalles Plato'
          }}
        />
        <Stack.Screen
          name='progresoPedido'
          component={ProgresoPedido}
          options={{
            title: 'Progreso Pedido'
          }}
        />
        <Stack.Screen
          name='resumenPedido'
          component={ResumenPedido}
          options={{
            title: 'Resumen Pedido'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
