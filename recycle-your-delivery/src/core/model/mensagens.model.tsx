import { MensagemModel } from "./mensagem.model";

export interface MensagensModel {
    idSolicitacao: number,
    title: string,
    userOne: string,
    userTwo: string,
    mensagens: Array<MensagemModel>
}
