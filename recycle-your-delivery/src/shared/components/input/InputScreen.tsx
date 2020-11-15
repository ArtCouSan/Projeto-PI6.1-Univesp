import React from 'react';
import { Input } from 'react-native-elements';

const InputScreen = ({placeholder, onChange}) => {

    return (
        <Input
            onChangeText={onChange}
            placeholder={placeholder}
        />
    );
}

export default InputScreen;