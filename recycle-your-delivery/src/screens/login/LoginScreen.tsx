import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import LoginContext from '../../context/LoginContext';
import { Colors } from '../../shared/style/colors';
import { styles } from './LoginScreenStyle';
import firebase from "../../firebase/config";

const LoginScreen = ({ navigation }) => {

    const {
        handleChangeLoginEmail,
        handleChangeLoginSenha,
        handleUser,
        botaoLoginDisable,
        login
    } = useContext(LoginContext);

    function singUp() {
        if (login.email.trim().length && login.senha.trim().length) {
            firebase
                .auth()
                .signInWithEmailAndPassword(login.email.trim(), login.senha.trim())
                .then(result => {
                    firebase.database().ref(`recycle/users/${result.user.uid}`).on('value', function (snapshot) {
                        handleUser(snapshot.val().user)
                    });
                    navigation.navigate("SideMenu");
                });
        }
    }


    function singIn() {
        navigation.navigate("SigIn");
    }

    return (
        <View style={[styles.container]}>

            <Image resizeMode="cover" style={{ marginBottom: 10, alignSelf: 'center'}} resizeMethod="auto" width={100} height={100} source={require("../../../assets/login-icon.png")} />

            <Input
                onChangeText={value => handleChangeLoginEmail(value)}
                placeholder="Email"
                leftIcon={{ type: 'font-awesome', name: 'user', style: { color: Colors.fern } }}
                maxLength={30}
                style={[styles.inputPlaceholder]}
            />
            <Input
                onChangeText={value => handleChangeLoginSenha(value)}
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock', style: { color: Colors.fern } }}
                secureTextEntry={true}
                maxLength={12}
                style={[styles.inputPlaceholder]}
            />
            <Button
                disabled={botaoLoginDisable}
                buttonStyle={[styles.buttonBackground]}
                titleStyle={[styles.button]}
                title="LOGAR"
                onPress={() => singUp()}
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