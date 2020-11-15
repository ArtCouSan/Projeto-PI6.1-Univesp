import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import ConversaScreen from '../conversa/ConversaScreen';
import ListarMensagensScreen from '../listarMensagens/ListarMensagensScreen';

const Stack = createStackNavigator();

const RouteRecolhedorMensagensScreen = ({route, navigation}) => {

  let idUserTo: any;
  let rotaInicial;

  useEffect(() => {
     verifyParams();
  }, [route.params])

  const verifyParams = () => {
    if(route.params) {
      idUserTo = route.params.idUserTo ? route.params.idUserTo : null;
      rotaInicial = route.params.rotaInicial ? route.params.rotaInicial : "ListarMensagens";
    } else {
      idUserTo = null;
      rotaInicial = "ListarMensagens";
    }
  }
  
  return (
    <NavigationContainer
      independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={rotaInicial}>
        <Stack.Screen name="ListarMensagens"
          component={ListarMensagensScreen}
        />
        <Stack.Screen 
          name="Conversa" 
          component={ConversaScreen}
          initialParams={{
            idUserTo: idUserTo
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteRecolhedorMensagensScreen;