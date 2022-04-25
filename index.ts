// import { type } from "os";

// function soma (a: number, b: number) {
//     return a + b;
// }

//types - define uma estrutura de dados para os parametros 
//interfaces - contratos para implemantar as classes

//interface

// interface IAnimal {
//     nome: string;
//     tipe: 'terrestre' | 'aquático';
//     executarRugido(alturaEmDecibeis: number): void;
// }

// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     executarRugido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB')
// }

// animal.executarRugido('s')

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: true,
// }

//type


// type IAnimal {
//     nome: string;
//     tipe: 'terrestre' | 'aquático';
//     executarRugido(alturaEmDecibeis: number): void;
// }

// type IAnimal {
//     nome: string;
//     tipe: 'terrestre' | 'aquático';
//     executarRugido(alturaEmDecibeis: number): void;
// }

// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'médio' | 'grande';
// }

// type IDomestico = IFelino | ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte:'medio',
//     tipo: 'terrestre',
// }

//type usar para juntar diferentes interfaces ou definir que variável pode ser interface, fazer junções

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });

//Gereric types

// function adicionaApendiceALista<NaoSei>(array: any[], valor: NaoSei) {
//     return array.map(item => item + valor);
//     function adicionaApendiceALista<number>(array: any[], valor:number: any[])
    
// }


//quando não sabe o que vai receber coloca a letra t 

// interface IUsuario {
//     id: string;
//     email: string;
// }

// interface IAdmin extends IUsuario {
//     cargo: 'gerente' | 'cordenador' | 'supervisor';
// }

// function redirecione(usuario: IUsuario | IAdmin) {
//     if('cargo' in usuario) {
//         //redirecionar para a área de administração
//     }

//        //redirecionar para a área do usuário 
// }

// interface IUsuario {
//     id: string;
//     email: string;
//     cargo: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
// }

// function redirecione(usuario: IUsuario) {
//     if(usuario.cargo) {
//         //redirecionar (usuario.cargo)
//     }

//        //redirecionar para a área do usuário 
// }

// interface Cachorro {
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// class meuCachorro implements Cachorro {
//     idade;
//     nome;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new meuCachorro('Mike', 2);

//usar bibliotecas externas 

// interface Estudante {
//     nome: string;
//     idade: number;
// }

// interface Estudante {
//     serie: string;
// }

// const estudante: Estudante = {
    
// }

// import $ from 'jquery';

// $.fn.extend({
//     novaFuncao() {
//         console.log('Chamou nova funcao');
//     }
// });

// $('body').novaFuncao();

//instalar biblioteca - documentação da linguagem - interfaces, type
//(Omit) 
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Basileiro extends Omit<Pessoa, 'nacionalidade>'{

}

const brasileiro: Brasileiro = {

}