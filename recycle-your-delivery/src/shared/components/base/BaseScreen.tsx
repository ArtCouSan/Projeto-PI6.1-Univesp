import React from 'react';
import { View } from 'react-native';
import { styles } from './BaseScreenStyle';

const BaseScreen = ({ screen }) => {

    return (
        <View style={[styles.container]}>
            {screen}
        </View>
    )
}

export default BaseScreen;