export default class Pet {
    private nome: string;
    private tipo: string;
    private raca: string;
    private genero: string;
    private responsavel: string;

    constructor(nome: string, raca: string, genero: string, tipo: string, responsavel: string) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
        this.responsavel = responsavel;
    }

    public get getNome() { return this.nome; }
    public set setNome(nome: string) { this.nome = nome; }

    public get getRaca() { return this.raca; }
    public set setRaca(raca: string) { this.raca = raca; }

    public get getGenero() { return this.genero; }
    public set setGenero(genero: string) { this.genero = genero; }

    public get getTipo() { return this.tipo; }
    public set setTipo(tipo: string) { this.tipo = tipo; }

    public get getResponsavel() { return this.responsavel; }


}