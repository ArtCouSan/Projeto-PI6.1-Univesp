import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetalheSolicitacaoScreen from '../detalheSolicitacao/DetalheSolicitacaoScreen';
import ListarSolicitacaoScreen from '../listarSolicitacao/ListarSolicitacaoScreen';

const Stack = createStackNavigator();

const RouteSolicitanteScreen = () => {
  return (
    <NavigationContainer
      independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Solicitacoes">
        <Stack.Screen name="Solicitacoes" component={ListarSolicitacaoScreen} />
        <Stack.Screen 
          name="Detalhe Solicitacao" 
          component={DetalheSolicitacaoScreen}
          initialParams={{
            item: null,
            back: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteSolicitanteScreen;