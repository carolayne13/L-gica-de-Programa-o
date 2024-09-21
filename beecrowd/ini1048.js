/*A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


Salário	Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.*/


salario = parseFloat(prompt("Insira o salário do funcionário: "))

if (salario <= 400.00){
    (percentual = 15)
}else if (salario <= 800.00){
    (percentual = 12)
}else if (salario <= 1200.00){
    (percentual = 10)
}else if (salario <= 2000.00){
    (percentual = 7)
}else{
    (percentual = 4)
}    
    
reajuste = salario * percentual / 100
novoSalario = salario + reajuste

document.write (`Novo salario: ${novoSalario.toFixed(2)} `)
document.write(`Reajuste ganho: ${reajuste.toFixed(2)} `)
document.write(`Em percentual: ${percentual.toFixed()}%`) 