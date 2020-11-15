import firebase from 'firebase';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginContext from '../../../context/LoginContext';
import { MensagensModel } from '../../../core/model/mensagens.model';
import BaseScreen from '../../../shared/components/base/BaseScreen';
import { styles } from './ListarMensagensScreenStyle';

const ListarMensagensScreen = ({ route, navigation}) => {

    const {
        user
    } = useContext(LoginContext);

    const [messages, setMessages] = useState<MensagensModel>([]);

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            initListarMensagens();
        });
        
        return () => {
            unsubscribe;
        }
       
    }, [navigation]);

    const initListarMensagens  = () => {

        firebase.database().ref(`recycle/messages/`).orderByChild('userOne').equalTo(user.email).on("value", function(snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function(data) {
                console.log(data.key);
            });
        });

        firebase.database().ref(`recycle/messages/`).orderByChild('userTwo').equalTo(user.email).on("value", function(snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function(data) {
                console.log(data.key);
            });
        });
        
    }

    return (
        <BaseScreen
            screen={
                <View style={{marginTop: 30}}>
                    <Text>Mensagens</Text>
                    <FlatList
                        data={messages}
                        renderItem={({item}) => 
                            <ListItem 
                                containerStyle={styles.item} 
                                key={item.idSolicitacao} 
                                bottomDivider
                            >
                                <ListItem.Content>
                                    <ListItem.Title >{item.title}</ListItem.Title>
                                </ListItem.Content>
                                <Icon name="eye" size={16} onPress={() => navigation.push("Detalhe Solicitacao", { item: item})}/>
                            </ListItem>
                        }
                    />
                </View>
            }
        />
    )
}

export default ListarMensagensScreen;