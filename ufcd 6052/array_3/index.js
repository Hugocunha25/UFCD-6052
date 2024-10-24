let formador = ["Hugo", 44, "1980"];

let pessoa = {
    nome: "Hugo",
    idade: 44,
    ano_de_nascimento: 1980,
    validar_idade: function (idadeParaValidar) {
        if (this.idade === idadeParaValidar) {
            console.log(`A idade ${idadeParaValidar} está correta.`);
        } else {
            console.log(`A idade ${idadeParaValidar} está incorreta. A idade correta é ${this.idade}.`);
        }
    }
};

console.log("Nome:", formador[0]);
console.log("Idade:", formador[1]);
console.log("Ano de nascimento:", formador[2]);

console.log("Nome:", pessoa.nome);

// Validar a idade para várias idades
pessoa.validar_idade(44); // Deve dizer que está correta
pessoa.validar_idade(30); // Deve dizer que está incorreta
pessoa.validar_idade(20);// Deve dizer que está incorreta

