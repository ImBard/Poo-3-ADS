export default class Produto {
    private nome!: string;
    private valor!: number;
    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }

    public getNome(): string {
        return this.nome;
    }

    public set setNome(nome: string) {
        this.nome = nome;
    }

    public getValor(): number {
        return this.valor;
    }

    public set setValor(valor: number) {
        this.valor = valor;
    }
}