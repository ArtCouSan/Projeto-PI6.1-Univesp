import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginContext from '../../../context/LoginContext';
import { StatusSolicitacaoEnum } from '../../../core/enums/StatusSolicitacaoEnum.enum';
import { SolicitacaoModel } from '../../../core/model/solicitacao.model';
import apiService from '../../../core/service/api.service';
import BaseScreen from '../../../shared/components/base/BaseScreen';
import { styles } from './ListarScreenStyle';

const ListarSolicitacaoScreen = ({navigation}) => {

    const {
        user
    } = useContext(LoginContext);

    const [solicitacoes, setSolicitacoes] = useState<Array<SolicitacaoModel>>([]);

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            initListarSolicitacoes();
        });
        
        return () => {
            unsubscribe;
        }
       
    }, [navigation]);

    const initListarSolicitacoes  = () => {

        apiService.listarSolicitacoes(user.id)
        .then((result) => {
            setSolicitacoes(result.data as SolicitacaoModel[]);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    }

    return (
        <BaseScreen
            screen={
                <View style={{marginTop: 30}}>
                    <FlatList
                        data={solicitacoes}
                        renderItem={({item}) => 
                            <ListItem 
                                containerStyle={styles.item} 
                                key={item.userId} 
                                bottomDivider
                            >
                                <ListItem.Content>
                                    <ListItem.Title >{item.titulo}</ListItem.Title>
                                </ListItem.Content>
                                <Text>{
                                    (item.status == StatusSolicitacaoEnum[StatusSolicitacaoEnum.ATIVO] ? 'Ativo' : (item.status == StatusSolicitacaoEnum[StatusSolicitacaoEnum.CANCELADO] ? 'Cancelado' : 'Em andamento'))
                                }</Text>
                                <Icon name="eye" size={16} onPress={() => navigation.push("Detalhe Solicitacao", { item: item, back: "Solicitacoes"})}/>
                            </ListItem>
                        }
                    />
                </View>
            }
        />
    )
}

export default ListarSolicitacaoScreen;