import React, { createContext, useState } from 'react';
import { CadastroDTO } from '../core/dto/CadastreDTO';
import { LoginDTO } from '../core/dto/LoginDTO';
import { UsuarioModel } from '../core/model/usuario.model';

interface LoginContextData {
    user: UsuarioModel | null;
    login: LoginDTO;
    cadastroUser: CadastroDTO;
    handleChangeUsername: any;
    handleChangeNome: any;
    handleChangeEmail: any;
    handleChangeSenha: any;
    handleChangeConfirmarSenha: any;
    handleChangeLoginEmail: any;
    handleChangeLoginSenha: any;
    botaoLoginDisable: boolean;
    logout(): void;
}

const LoginContext = createContext({} as LoginContextData);

export const LoginProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<UsuarioModel | null>(null);
    const [botaoLoginDisable, setBotaoLoginDisable] = useState<boolean>(true);
    const [cadastroUser, setCadastroUser] = useState<CadastroDTO>({
        username: '',
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    const [login, setLogin] = useState<LoginDTO>({
        email: '',
        senha: ''
    });

    function handleChangeLoginEmail(email: string) {
        setLogin({
            ...login,
            email: email
        });

        if(email.trim().length && login.senha.trim().length) {
            setBotaoLoginDisable(false);
        } else {
            setBotaoLoginDisable(true);
        }
    }

    function handleChangeLoginSenha(senha: string) {
        setLogin({
            ...login,
            senha: senha
        });
        
        if(login.email.trim().length && senha.trim().length) {
            setBotaoLoginDisable(false);
        } else {
            setBotaoLoginDisable(true);
        }
    }

    function handleChangeUsername(username: string) {
        setCadastroUser({
            ...cadastroUser,
            username: username
        })
    }

    function handleChangeNome(nome: string) {
        setCadastroUser({
            ...cadastroUser,
            nome: nome
        })
    }

    function handleChangeEmail(email: string) {
        setCadastroUser({
            ...cadastroUser,
            email: email
        })
    }

    function handleChangeSenha(senha: string) {
        setCadastroUser({
            ...cadastroUser,
            senha: senha
        })
    }

    function handleChangeConfirmarSenha(confirmarSenha: string) {
        setCadastroUser({
            ...cadastroUser,
            confirmarSenha: confirmarSenha
        })
    }

    function logout() {
        setUser(null);
    };


    return (
        <LoginContext.Provider value={{
            user,
            login,
            cadastroUser,
            botaoLoginDisable,
            handleChangeUsername,
            handleChangeNome,
            handleChangeEmail,
            handleChangeSenha,
            handleChangeConfirmarSenha,
            handleChangeLoginEmail,
            handleChangeLoginSenha,
            logout
        }}>
            {children}
        </LoginContext.Provider>);
};

export default LoginContext;