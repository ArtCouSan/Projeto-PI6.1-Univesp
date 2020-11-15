import React, { useContext, useEffect, useState } from 'react';
import { Modal, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import FazerSolicitacaoContext from '../../../context/FazerSolicitacaoContext';
import LoginContext from '../../../context/LoginContext';
import { SolicitacaoModel } from '../../../core/model/solicitacao.model';
import apiService from '../../../core/service/api.service';
import BaseScreen from '../../../shared/components/base/BaseScreen';
import CheckboxScreen from '../../../shared/components/checkbox/CheckboxScreen';
import InputScreen from '../../../shared/components/input/InputScreen';
import { styles } from './FazerSolicitacaoScreenStyle';

const FazerSolicitacaoScreen = ({ navigation }) => {

    const [msgVisible, setMsgVisible] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>();

    const {
        handleChangeTitulo,
        handleChangeResponsavel,
        handleChangeEndereco,
        handleChangeReferencia,
        handleChangeCelular,
        handleChangeEmail,
        handleChangeMetal,
        handleChangePapel,
        handleChangePlastico,
        handleChangeVidro,
        handleChangeUser,
        isValidForm,
        solicitacao
    } = useContext(FazerSolicitacaoContext);

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            handleChangeUser(user.id);
        });
        
        return () => {
            unsubscribe;
        }
       
    }, [navigation]);

    const {
        user
    } = useContext(LoginContext);

    const toggleOverlay = () => {
        setMsgVisible(!msgVisible);
    };

    const confirmacao = () => {
        setMsgVisible(!msgVisible);
        navigation.navigate("Home");
    }

    function salvarSolicitacao() {

        if(isValidForm()){

            apiService.salvarSolicitacao(solicitacao)
            .then((response) => {
                setMsgVisible(true);
                setMsg("Solicitação feita com sucesso");
            })
            .catch((err) => {
              setMsgVisible(true);
              setMsg("Ocorreu um erro, contate o suporte!");
            });

        }

    }

    return (
        <BaseScreen
            screen={
                <View>
                    <Text style={styles.titulo}>Título</Text>
                    <InputScreen onChange={handleChangeTitulo} placeholder="Insira o título" />
                    <Text style={styles.titulo}>Responsável</Text>
                    <InputScreen onChange={handleChangeResponsavel} placeholder="Insira o responsável" />
                    <Text style={styles.titulo}>Material</Text>
                    <CheckboxScreen value={solicitacao.papelSelected} onChange={handleChangePapel} title="Papel" />
                    <CheckboxScreen value={solicitacao.metalSelected} onChange={handleChangeMetal} title="Metal" />
                    <CheckboxScreen value={solicitacao.plasticoSelected} onChange={handleChangePlastico} title="Plastico" />
                    <CheckboxScreen value={solicitacao.vidroSelected} onChange={handleChangeVidro} title="Vidro" />
                    <Text style={styles.titulo}>Local</Text>
                    <InputScreen onChange={handleChangeEndereco} placeholder="Endereço completo" />
                    <InputScreen onChange={handleChangeReferencia} placeholder="Referência" />
                    <Text style={styles.titulo}>Contato</Text>
                    <InputScreen onChange={handleChangeCelular} placeholder="Celular" />
                    <InputScreen onChange={handleChangeEmail} placeholder="E-mail" />
                    <Button
                        onPress={() =>  salvarSolicitacao()}
                        title="Fazer Solicitação"
                    />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={msgVisible}
                        presentationStyle={'overFullScreen'}
                    >
                        <View style={styles.modal}>
                            <Text style={{fontSize: 18, marginBottom: 30}}>{msg}</Text>
                            <Button title='Confirmando' onPress={() => confirmacao()} />
                        </View>
                    </Modal>
                </View>
            }
        />
    )
}

export default FazerSolicitacaoScreen;