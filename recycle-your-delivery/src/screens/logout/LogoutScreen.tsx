import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import LoginContext from '../../context/LoginContext';

const LogoutScreen = ({ navigation }) => {

    const {
        logout
    } = useContext(LoginContext);

    useEffect(() => {

        logout();
        navigation.navigate("Login");

    }, [navigation]);

    return (
        <View>
        </View>
    )
}

export default LogoutScreen;