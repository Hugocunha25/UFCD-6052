let idades_da_turma =[21,33,52,37,44,49,31,40,21,33,38,19];

let soma = 0;

for (let i=0; i <idades_da_turma.length; i++){
    soma += idades_da_turma[i];

}
let media = soma / idades_da_turma.length;

console.log("Media das idades:", media);