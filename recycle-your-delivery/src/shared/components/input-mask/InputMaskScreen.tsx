import React from 'react';
import { TextInputMask } from 'react-native-masked-text';

const InputMaskScreen = ({placeholder, onChange, mask}) => {

    return (
        <TextInputMask
            type={mask}
            onChangeText={onChange}
            placeholder={placeholder}
        />
    );
}

export default InputMaskScreen;