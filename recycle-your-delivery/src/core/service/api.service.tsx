import axios, { AxiosRequestConfig } from "axios";
import { SolicitacaoModel } from "../model/solicitacao.model";

const apiConfig: AxiosRequestConfig = {
  baseURL: "http://10.0.2.2:8080/v1",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};

const api = axios.create(apiConfig);

function salvarSolicitacao(
  solicitacao: SolicitacaoModel
): Promise<SolicitacaoModel> {
  return api.post(`/solicitacao`, JSON.stringify(solicitacao));
}

function listarSolicitacoes(idUser: string): Promise<Array<SolicitacaoModel>> {
  return api.get(`/solicitacao/listar-solicitacoes/${idUser}`);
}

function encontrarSolicitacoes(
  idUser: string
): Promise<Array<SolicitacaoModel>> {
  return api.get(`/solicitacao/encontrar-solicitacoes/${idUser}`);
}

function getSolicitacao(id: number): Promise<Array<SolicitacaoModel>> {
  return api.get(`/solicitacao/${id}`);
}

function ativarSolicitacao(id: number): Promise<SolicitacaoModel> {
  return api.put(`/solicitacao/${id}/ativar`, {});
}

function emAndamentoSolicitacao(id: number): Promise<SolicitacaoModel> {
  return api.put(`/solicitacao/${id}/em-andamento`, {});
}

function cancelarSolicitacao(id: number): Promise<SolicitacaoModel> {
  return api.put(`/solicitacao/${id}/cancelar`, {});
}

const apiService = {
  salvarSolicitacao,
  listarSolicitacoes,
  getSolicitacao,
  ativarSolicitacao,
  emAndamentoSolicitacao,
  cancelarSolicitacao,
  encontrarSolicitacoes,
};

export default apiService;
