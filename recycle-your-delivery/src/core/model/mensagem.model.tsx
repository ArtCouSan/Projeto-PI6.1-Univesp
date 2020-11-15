export interface MensagemModel {
    text: string,
    user: {
        _id: string,
        name: string,
        avatar: string
    },
    createdAt: Date
}
