import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, Image, View } from 'react-native';
import { Card } from 'react-native-elements';
import LoginContext from '../../../context/LoginContext';
import { SolicitacaoModel } from '../../../core/model/solicitacao.model';
import apiService from '../../../core/service/api.service';
import BaseScreen from '../../../shared/components/base/BaseScreen';
import { styles } from './DetalheSolicitacaoScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusSolicitacaoEnum } from '../../../core/enums/StatusSolicitacaoEnum.enum';

const DetalheSolicitacaoScreen = ({ route, navigation }) => {

    const { user } = useContext(LoginContext);

    const [solicitacao, setSolicitacao] = useState<SolicitacaoModel>();

    const [acao, setAcao] = useState<{}>();

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            init();
        });
        
        return () => {
            unsubscribe;
        }
        
    }, [navigation]);

    const cancelarSolicitacao = () => {
        apiService.cancelarSolicitacao(route.params.item.id)
        .then((result) => {
            setSolicitacao(result.data as SolicitacaoModel);
            setAcao(
                <Button onPress={() => ativarSolicitacao()} title='Ativar Solicitação' />
            )
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    const ativarSolicitacao = () => {
        apiService.ativarSolicitacao(route.params.item.id)
        .then((result) => {
            setSolicitacao(result.data as SolicitacaoModel);
            setAcao(
                <Button onPress={() => cancelarSolicitacao()} title='Cancelar Solicitação' />
            )
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    const emAndamentoSolicitacao = () => {
        apiService.emAndamentoSolicitacao(route.params.item.id)
        .then((result) => {
            setSolicitacao(result.data as SolicitacaoModel);
            setAcao(
                <Button onPress={() => cancelarSolicitacao()} title='Cancelar Solicitação' />
            )
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    const init = () => {

        apiService.getSolicitacao(route.params.item.id)
            .then((result) => {
                setSolicitacao(result.data as SolicitacaoModel);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        if (user.id == route.params.item.userId) {

            if (route.params.item.status == StatusSolicitacaoEnum.[StatusSolicitacaoEnum.ATIVO]) {
                setAcao(
                    <View>
                        <Button onPress={() => cancelarSolicitacao()} title='Cancelar Solicitação' />
                        <Card.Divider style={styles.divider} />
                        <Button onPress={() => emAndamentoSolicitacao()} title='Colocar Em Andamento' />
                    </View>
                )
            } else if (route.params.item.status == StatusSolicitacaoEnum.[StatusSolicitacaoEnum.CANCELADO]) {
                setAcao(
                    <View>
                        <Button onPress={() => ativarSolicitacao()} title='Ativar Solicitação' />
                        <Card.Divider style={styles.divider} />
                        <Button onPress={() => emAndamentoSolicitacao()} title='Colocar Em Andamento' />
                    </View>
                )
            } else {
                setAcao(
                    <View>
                        <Button onPress={() => cancelarSolicitacao()} title='Cancelar Solicitação' />
                    </View>
                )
            }

        } else {


            setAcao(
                <Button onPress={() => route.params.routeParent.navigate("Mensagens", {idUserTo: route.params.item.userId, rotaInicial: "Conversa"})} title='Entrar em contato' />
            )

        }

    }


    return (
        <BaseScreen
            screen={
                <View>
                    <Icon style={{ marginBottom: 40, marginTop: 20 }} onPress={() => navigation.push(route.params.back)} name="arrow-left" size={30} color="#900" />
                    <Card containerStyle={{ borderRadius: 20 }}>
                        <Card.Title>{solicitacao?.titulo}</Card.Title>
                        <Card.Divider />
                        <Text style={styles.titulo}>
                            Responsável:
                        </Text>
                        <Text>
                            {solicitacao?.responsavel}
                        </Text>
                        <Card.Divider style={styles.divider} />
                        <Text style={styles.titulo}>
                            Materiais a recolher:
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {solicitacao?.metalSelected ? <Image style={styles.images} height={65} width={70} resizeMode='cover' source={require('../../../../assets/reciclagem-metal.jpeg')} /> : <></>}
                            {solicitacao?.plasticoSelected ? <Image style={styles.images} height={65} width={70} resizeMode='cover' source={require('../../../../assets/reciclagem-plastico.jpeg')} /> : <></>}
                            {solicitacao?.vidroSelected ? <Image style={styles.images} height={65} width={70} resizeMode='cover' source={require('../../../../assets/reciclagem-vidro.jpg')} /> : <></>}
                            {solicitacao?.papelSelected ? <Image style={styles.images} height={65} width={70} resizeMode='cover' source={require('../../../../assets/reciclagem-papel.jpeg')} /> : <></>}
                        </View>
                        <Card.Divider style={styles.divider} />
                        <Text style={styles.titulo}>
                            Endereço:
                        </Text>
                        <Text>
                            {solicitacao?.enderecoCompleto} - {solicitacao?.referencia}
                        </Text>
                        <Card.Divider style={styles.divider} />
                        <Text style={styles.titulo}>
                            Contato:
                        </Text>
                        <Text>
                            {solicitacao?.celular}
                        </Text>
                        <Card.Divider style={styles.divider} />
                        {acao}
                    </Card>
                </View>
            }
        />
    )
}

export default DetalheSolicitacaoScreen;