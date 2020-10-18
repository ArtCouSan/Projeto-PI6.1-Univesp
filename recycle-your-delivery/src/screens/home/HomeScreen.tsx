import React from 'react';
import { View, Text } from 'react-native';
import BaseScreen from '../../shared/components/base/BaseScreen';
import { styles } from './HomeScreenStyle';

const HomeScreen = () => {

    return (
        <BaseScreen 
            screen={
                <View>
                    <Text>Teste</Text>
                </View>
            }
        />
    )
}

export default HomeScreen;