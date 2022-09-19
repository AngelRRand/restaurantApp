import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirebaseState from './src/context/firebase/firebaseState.js';
import PedidosbaseState from './src/context/pedidos/pedidosState.js';
import DetallesPlato from './src/view/DetallesPlato.js';
import FormularioPlato from './src/view/FormularioPlato.js';
import RestaurantMenu from './src/view/RestaurantMenu.js';
import NuevaOrden from './src/view/NuevaOrden.jsx';
import ProgresoPedido from './src/view/ProgresoPedido.js';
import ResumenPedido from './src/view/ResumenPedido.js';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <FirebaseState>
      <PedidosbaseState>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0f0f0f'
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25,
              color: '#e651ad',
            },
            headerTintColor: '#e651ad'
          }}
        >
          <Stack.Screen
            name='nuevaOrden'
            component={NuevaOrden}
            options={{
              headerTitleAlign: 'center',
              title: 'NAKAMA RAMEN',
              
            }}
          />
          <Stack.Screen
            name='menu'
            component={RestaurantMenu}
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

      </PedidosbaseState>

    </FirebaseState>
  );
}