export interface SolicitacaoModel {
    id?: number,
    userId: number,
    titulo: string,
    status: string,
    responsavel: string,
    papelSelected: boolean,
    metalSelected: boolean,
    plasticoSelected: boolean,
    vidroSelected: boolean,
    enderecoCompleto: string,
    referencia: string,
    celular: string,
    email: string
}