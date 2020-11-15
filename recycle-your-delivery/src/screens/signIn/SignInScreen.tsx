import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import LoginContext from '../../context/LoginContext';
import { Colors } from '../../shared/style/colors';
import { styles } from './SignInScreenStyle';
import firebase from "../../firebase/config";
import { UsuarioModel } from '../../core/model/usuario.model';

const SignInScreen = ({navigation}) => {

    const {
        cadastroUser,
        handleChangeConfirmarSenha,
        handleChangeEmail,
        handleChangeNome,
        handleChangeSenha,
        handleChangeUsername,
        handleUser
    } = useContext(LoginContext);

    function submit() {

        firebase
            .auth()
            .createUserWithEmailAndPassword(cadastroUser.email, cadastroUser.senha)
            .then((data) => {

                const user: UsuarioModel = {
                    email: cadastroUser.email,
                    username: cadastroUser.username,
                    id: data.user.uid,
                    nome: cadastroUser.nome
                };

                handleUser(user);

                firebase.database().ref('recycle/users/' + data.user.uid).set({
                    user
                });
                navigation.navigate("Login");
            })
            .catch((error) => {
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