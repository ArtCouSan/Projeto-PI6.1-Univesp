import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './BaseScreenStyle';

const BaseScreen = ({ screen }) => {

    return (
        <SafeAreaView
            style={{flex: 1, marginTop: 20}}>
            <ScrollView
                scrollEnabled={true}
                contentContainerStyle={{minHeight: '135%'}}
                style={[styles.container]}>
                {screen}
            </ScrollView>
        </SafeAreaView>
    )
}

export default BaseScreen;