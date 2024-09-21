/*Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B 
pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.*/

A = parseInt(prompt("Informe um valor inteiro: "))
B = parseInt(prompt("Informe um valor inteiro: "))
C = parseInt(prompt("Informe um valor inteiro: "))
D = parseInt(prompt("Informe um valor inteiro: "))

DIFERENCA = (A * B) - ( C *D)
document.write("DIFERENCA =",DIFERENCA)