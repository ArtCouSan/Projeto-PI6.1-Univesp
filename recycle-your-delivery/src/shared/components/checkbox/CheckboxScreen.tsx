import React from 'react';
import { CheckBox } from 'react-native-elements';
import { styles } from './CheckboxScreenStyle';

const CheckboxScreen = ({ title, onChange, value }) => {

    return (
        <CheckBox
            containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent'}}
            onPress={() => onChange(!value)}
            title={title}
            checked={value}
        />
    );
}

export default CheckboxScreen;