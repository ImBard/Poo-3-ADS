"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, cpf) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.pets = [];
    }
    get getCpf() {
        return this.cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    get getPets() {
        return this.pets;
    }
    addPet(pet) {
        this.pets.push(pet);
    }
    removePet(pets) {
        this.pets = pets;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    set setNomeSocial(nomeSocial) {
        this.nomeSocial = nomeSocial;
    }
    consumirProduto(produto) {
        this.produtosConsumidos.push(produto);
    }
    consumirServico(servico) {
        this.servicosConsumidos.push(servico);
    }
    getConsumo() {
        return [...this.produtosConsumidos, ...this.servicosConsumidos];
    }
}
exports.default = Cliente;
