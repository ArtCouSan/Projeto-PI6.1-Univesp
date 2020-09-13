import React from 'react';
import { Image, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Colors } from '../../shared/style/colors';
import { styles } from './LoginScreenStyle';

const LoginScreen = ({ navigation }) => {

    function esqueciMinhaSenha() {

    }

    function singIn() {
        navigation.navigate("SigIn");
    }

    return (
        <View style={[styles.container]}>

            <Image resizeMode="contain" style={{ marginBottom: 10, alignSelf: 'center'}} resizeMethod="resize" width={20} height={20} source={require("../../../assets/login-icon.png")} />

            <Input
                placeholder="Usuário"
                leftIcon={{ type: 'font-awesome', name: 'user', style: { color: Colors.fern } }}
                maxLength={10}
                style={[styles.inputPlaceholder]}
            />
            <Input
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock', style: { color: Colors.fern } }}
                secureTextEntry={true}
                maxLength={12}
                style={[styles.inputPlaceholder]}
            />
            <Button
                buttonStyle={[styles.buttonBackground]}
                titleStyle={[styles.button]}
                title="LOGAR"
            />

            <View style={[styles.containerButton]}>
                <Button
                    buttonStyle={[styles.buttonSmallBackground]}
                    titleStyle={[styles.buttonSmall]}
                    containerStyle={[styles.buttonSmallContainer]}
                    onPress={() => singIn()}
                    title="Cadastrar-se"
                />
                <Button
                    buttonStyle={[styles.buttonSmallBackground]}
                    titleStyle={[styles.buttonSmall]}
                    containerStyle={[styles.buttonSmallContainer]}
                    title="Esqueci minha senha"
                />
            </View>

        </View>
    )
}

export default LoginScreen;