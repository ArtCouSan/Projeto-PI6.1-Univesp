import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { FazerSolicitacaoProvider } from '../../../context/FazerSolicitacaoContext';
import FAQScreen from '../../../screens/faq/FAQScreen';
import HomeScreen from '../../../screens/home/HomeScreen';
import LogoutScreen from '../../../screens/logout/LogoutScreen';
import RouteRecolhedorMensagensScreen from '../../../screens/mensagens/routeRecolhedor/RouteRecolhedorScreen';
import FazerSolicitacaoScreen from '../../../screens/solicitacao/fazerSolicitacao/FazerSolicitacaoScreen';
import RouteRecolhedorScreen from '../../../screens/solicitacao/routeRecolhedor/RouteRecolhedorScreen';
import RouteSolicitanteScreen from '../../../screens/solicitacao/routeSolicitante/RouteSolicitanteScreen';

const Drawer = createDrawerNavigator();

const SideMenuScreen = ({ navigation }) => {

    return (
        <FazerSolicitacaoProvider>
            <Drawer.Navigator
                initialRouteName="Home"
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Fazer Solicitação" component={FazerSolicitacaoScreen} />
                <Drawer.Screen name="Minhas Solicitações" component={RouteSolicitanteScreen} />
                <Drawer.Screen name="Encontrar Solicitações" component={RouteRecolhedorScreen} />
                <Drawer.Screen name="Mensagens" component={RouteRecolhedorMensagensScreen} />
                <Drawer.Screen name="FAQ" component={FAQScreen} />
                <Drawer.Screen name="Logout" component={() => <LogoutScreen navigation={navigation} />} />
            </Drawer.Navigator>
        </FazerSolicitacaoProvider>
    );
}

export default SideMenuScreen;