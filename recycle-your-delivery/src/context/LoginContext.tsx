import React, { createContext, useState } from 'react';
import { CadastroDTO } from '../core/dto/CadastreDTO';
import { UsuarioModel } from '../core/model/usuario.model';

interface LoginContextData {
    user: UsuarioModel | null;
    cadastroUser: CadastroDTO;
    handleChangeUsername: any;
    handleChangeNome: any;
    handleChangeEmail: any;
    handleChangeSenha: any;
    handleChangeConfirmarSenha: any;
    logout(): void;
}

const LoginContext = createContext({} as LoginContextData);

export const LoginProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<UsuarioModel | null>(null);
    const [cadastroUser, setCadastroUser] = useState<CadastroDTO>({
        username: '',
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

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
            cadastroUser,
            handleChangeUsername,
            handleChangeNome,
            handleChangeEmail,
            handleChangeSenha,
            handleChangeConfirmarSenha,
            logout
        }}>
            {children}
        </LoginContext.Provider>);
};

export default LoginContext;