class Usuario{
    constructor(nome, isAdmin){
        this.nome = nome;
        this.isAdmin = isAdmin;
    }
}

let arrUsuarios = [new Usuario("Caio", true), new Usuario("Roberto", true), new Usuario("Lucas", false), new Usuario("Maria", false)]
let arrAmdin = arrUsuarios.every(a => a.isAdmin === true)

// Método Every verifica se todos os elementos batem com tal condição, retornano True ou False

console.log(arrAmdin)