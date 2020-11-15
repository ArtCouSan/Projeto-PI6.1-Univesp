import React from 'react';
import { FlatList, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { FAQModel } from '../../core/model/faq.model';
import BaseScreen from '../../shared/components/base/BaseScreen';

const FAQScreen = ({ navigation }) => {

    const list : Array<FAQModel> = [
        {
            text: "Com quem posso falar caso tenha problemas no app?",
            msg: "Entre em contato com artcousan@gmail.com"
        },
        {
            text: "Pago alguma coisa no app?",
            msg: "Não, o app é totalmente gratuito"
        },
        {
            text: "Os coletores cobram?",
            msg: "O app é um canal com o coletor, toda a negociação, caso exista, é feita com ele, pórem não nos responsabilizamos."
        },
        {
            text: "Tenho limite para uso?",
            msg: "Não, você tem acesso total a plataforma em ambas funcionalidades (coleta e entrega)"
        },
    ]

    return (
        <BaseScreen 
            screen={
                <FlatList
                    data={list}
                    renderItem={({item}) => 
                    <Card>
                        <Card.Title>{item.text}</Card.Title>
                        <Text>{item.msg}</Text>
                    </Card>
                    }
                />
            }
        />
    )
}

export default FAQScreen;