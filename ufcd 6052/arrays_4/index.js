let pessoas = [
    {
        nome: "Hugo",
        idade: 44,
        ano_de_nascimento: 1980,
        peso: 63, // Peso em kg
        validar_idade: function (idadeParaValidar) {
            if (this.idade === idadeParaValidar) {
                console.log(`A idade ${idadeParaValidar} está correta.`);
            } else {
                console.log(`A idade ${idadeParaValidar} está incorreta. A idade correta é ${this.idade}.`);
            }
        }
    },
    {
        nome: "Vitor",
        idade: 37,
        ano_de_nascimento: 1987,
        peso: 83, // Peso em kg
        validar_idade: function (idadeParaValidar) {
            if (this.idade === idadeParaValidar) {
                console.log(`A idade ${idadeParaValidar} está correta.`);
            } else {
                console.log(`A idade ${idadeParaValidar} está incorreta. A idade correta é ${this.idade}.`);
            }
        }
    },
    {
        nome: "miguel",
        idade: 34,
        ano_de_nascimento: 1990,
        peso: 75, // Peso em kg
        validar_idade: function (idadeParaValidar) {
            if (this.idade === idadeParaValidar) {
                console.log(`A idade ${idadeParaValidar} está correta.`);
            } else {
                console.log(`A idade ${idadeParaValidar} está incorreta. A idade correta é ${this.idade}.`);
            }
        }
    },
    {
        nome: "Ana",
        idade: 22,
        ano_de_nascimento: 2002,
        peso: 55, // Peso em kg
        validar_idade: function (idadeParaValidar) {
            if (this.idade === idadeParaValidar) {
                console.log(`A idade ${idadeParaValidar} está correta.`);
            } else {
                console.log(`A idade ${idadeParaValidar} está incorreta. A idade correta é ${this.idade}.`);
            }
        }
    },
    {
        nome: "Carlos",
        idade: 30,
        ano_de_nascimento: 1994,
        peso: 85, // Peso em kg
        validar_idade: function (idadeParaValidar) {
            if (this.idade === idadeParaValidar) {
                console.log(`A idade ${idadeParaValidar} está correta.`);
            } else {
                console.log(`A idade ${idadeParaValidar} está incorreta. A idade correta é ${this.idade}.`);
            }
        }
    }
];

// acessar as pessoas e validar idades
for (let i = 0; i < pessoas.length; i++) {
    let pessoa = pessoas[i];
    console.log("Nome:", pessoa.nome);
    console.log("Idade:", pessoa.idade);
    console.log("Ano de nascimento:", pessoa.ano_de_nascimento);
    console.log("Peso:", pessoa.peso);

    // Validar idades diferentes para cada pessoa
    pessoa.validar_idade(pessoa.idade); // Deve dizer que está correta
    pessoa.validar_idade(30); // Pode dizer que está incorreta dependendo da pessoa
}


