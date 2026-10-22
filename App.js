import Login from './telas/Login';
import Home from './telas/home';
import Sobre from './telas/sobre';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contato from './telas/contato';
import cores from './telas/cores';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: cores.azulEscuro },
          headerTintColor: cores.textoClaro,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: cores.azulMedio },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'Sobre nós' }} />
        <Stack.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
