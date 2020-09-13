import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import LoginContext from '../../context/LoginContext';
import { Colors } from '../../shared/style/colors';
import { styles } from './SignInScreenStyle';
import firebase from "../../firebase/config";

const SignInScreen = () => {

    const {
        cadastroUser,
        handleChangeConfirmarSenha,
        handleChangeEmail,
        handleChangeNome,
        handleChangeSenha,
        handleChangeUsername
    } = useContext(LoginContext);

    function submit() {

        firebase
            .auth()
            .createUserWithEmailAndPassword(cadastroUser.email, cadastroUser.senha)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <View style={[styles.container]}>
            <Input
                onChangeText={value => handleChangeUsername(value)}
                maxLength={15}
                placeholder="Usuário"
                leftIcon={{ type: 'font-awesome', name: 'user', style: { color: Colors.fern } }}
                style={[styles.inputPlaceholder]}
            />
            <Input
                onChangeText={value => handleChangeNome(value)}
                maxLength={100}
                placeholder="Nome Completo"
                leftIcon={{ type: 'font-awesome', name: 'user', style: { color: Colors.fern } }}
                style={[styles.inputPlaceholder]}
            />
            <Input
                onChangeText={value => handleChangeEmail(value)}
                maxLength={50}
                placeholder="Email"
                leftIcon={{ type: 'entypo', name: 'mail', style: { color: Colors.fern } }}
                style={[styles.inputPlaceholder]}
            />
            <Input
                onChangeText={value => handleChangeSenha(value)}
                maxLength={12}
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock', style: { color: Colors.fern } }}
                style={[styles.inputPlaceholder]}
            />
            <Input
                onChangeText={value => handleChangeConfirmarSenha(value)}
                maxLength={12}
                placeholder="Confirme a senha"
                leftIcon={{ type: 'font-awesome', name: 'lock', style: { color: Colors.fern } }}
                style={[styles.inputPlaceholder]}
            />
            <Button
                buttonStyle={[styles.buttonBackground]}
                titleStyle={[styles.button]}
                title="Cadastrar-se"
                onPress={submit}
            />
        </View>
    )
}

export default SignInScreen;