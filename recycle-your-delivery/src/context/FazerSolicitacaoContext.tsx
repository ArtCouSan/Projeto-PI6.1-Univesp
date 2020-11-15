import React, { createContext, useState } from 'react';
import { StatusSolicitacaoEnum } from '../core/enums/StatusSolicitacaoEnum.enum';
import { SolicitacaoModel } from '../core/model/solicitacao.model';

interface FazerSolicitacaoContextData {
    solicitacao: SolicitacaoModel;
    handleChangeTitulo: any;
    handleChangeResponsavel: any;
    handleChangePapel: any;
    handleChangeMetal: any;
    handleChangePlastico: any;
    handleChangeVidro: any;
    handleChangeEndereco: any;
    handleChangeReferencia: any;
    handleChangeCelular: any;
    handleChangeEmail: any;
    handleChangeUser: any;
    isValidForm: any
}

const FazerSolicitacaoContext = createContext({} as FazerSolicitacaoContextData);

export const FazerSolicitacaoProvider: React.FC = ({ children }) => {

    const [solicitacao, setSolicitacao] = useState<SolicitacaoModel>({
        celular: '',
        email: '',
        enderecoCompleto: '',
        metalSelected: false,
        papelSelected: false,
        plasticoSelected: false,
        vidroSelected: false,
        referencia: '',
        responsavel: '',
        titulo: '',
        userId: 0,
        status: StatusSolicitacaoEnum[StatusSolicitacaoEnum.ATIVO],
        id: 0
    });

    function handleChangeUser(userId: number) {
        setSolicitacao({
            ...solicitacao,
            userId: userId
        })
    }

    function handleChangeTitulo(titulo: string) {
        setSolicitacao({
            ...solicitacao,
            titulo: titulo
        })
    }

    function handleChangeResponsavel(responsavel: string) {
        setSolicitacao({
            ...solicitacao,
            responsavel: responsavel
        })
    }

    function handleChangePapel(papel: any) {
        setSolicitacao({
            ...solicitacao,
            papelSelected: papel
        })
    }


    function handleChangeMetal(metal: any) {
        setSolicitacao({
            ...solicitacao,
            metalSelected: metal
        })
    }

    function handleChangePlastico(plastico: any) {
        setSolicitacao({
            ...solicitacao,
            plasticoSelected: plastico
        })
    }

    function handleChangeVidro(vidro: any) {
        setSolicitacao({
            ...solicitacao,
            vidroSelected: vidro
        })
    }

    function handleChangeEndereco(endereco: string) {
        setSolicitacao({
            ...solicitacao,
            enderecoCompleto: endereco
        })
    }

    function handleChangeReferencia(referencia: string) {
        setSolicitacao({
            ...solicitacao,
            referencia: referencia
        })
    }

    function handleChangeCelular(celular: string) {
        setSolicitacao({
            ...solicitacao,
            celular: celular
        })
    }

    function handleChangeEmail(email: string) {
        setSolicitacao({
            ...solicitacao,
            email: email
        })
    }

    function isValidForm() {

        if ((solicitacao.celular &&
            solicitacao.email &&
            solicitacao.enderecoCompleto &&
            solicitacao.referencia &&
            solicitacao.responsavel &&
            solicitacao.titulo) &&
            (solicitacao.metalSelected ||
             solicitacao.papelSelected ||
             solicitacao.plasticoSelected ||
             solicitacao.vidroSelected)) {

            return true;

        } else {

            return false;

        }

    }

    return (
        <FazerSolicitacaoContext.Provider value={{
            solicitacao,
            handleChangeUser,
            handleChangeTitulo,
            handleChangeResponsavel,
            handleChangePapel,
            handleChangeMetal,
            handleChangePlastico,
            handleChangeVidro,
            handleChangeEndereco,
            handleChangeReferencia,
            handleChangeCelular,
            handleChangeEmail,
            isValidForm
        }}>
            {children}
        </FazerSolicitacaoContext.Provider>);
};

export default FazerSolicitacaoContext;