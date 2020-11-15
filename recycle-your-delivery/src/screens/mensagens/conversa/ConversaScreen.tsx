import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import LoginContext from '../../../context/LoginContext';
import BaseScreen from '../../../shared/components/base/BaseScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ConversaScreen = ({navigation}) => {

    const {
        user
    } = useContext(LoginContext);


    useEffect(() => {
        
       
    }, []);

    return (
        <BaseScreen
            screen={
                <View>
                     <Icon style={{ marginBottom: 40, marginTop: 20 }} onPress={() => navigation.navigate("ListarMensagens")} name="arrow-left" size={30} color="#900" />
                </View>
            }
        />
    )
}

export default ConversaScreen;