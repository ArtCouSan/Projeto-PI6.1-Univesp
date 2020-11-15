import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetalheSolicitacaoScreen from '../detalheSolicitacao/DetalheSolicitacaoScreen';
import EncontrarSolicitacoesScreen from '../encontrarSolicitacoes/EncontrarSolicitacoesScreen';

const Stack = createStackNavigator();

const RouteRecolhedorScreen = ({navigation}) => {

  const navigationParent = navigation;

  return (
    <NavigationContainer
      independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="EncontrarSolicitacoes">
        <Stack.Screen name="EncontrarSolicitacoes" 
          initialParams={{
            navigationParent: navigationParent
          }}
          component={EncontrarSolicitacoesScreen} 
        />
        <Stack.Screen 
          name="Detalhe Solicitacao" 
          component={DetalheSolicitacaoScreen}
          initialParams={{
            item: null,
            back: '',
            navigationParent: navigationParent
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteRecolhedorScreen;