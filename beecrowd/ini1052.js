/*Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.*/


n = parseInt(prompt("informe um número de 1 a 12: "))
if (n == 1){
    document.write("January")
}else if (n == 2){
    document.write("February")
}else if (n == 3){
    document.write("March")
}else if (n == 4){
    document.write("April")
}else if (n == 5){
    document.write("May")
}else if (n == 6){
    document.write("June")
}else if (n == 7){
    document.write("July")
}else if (n == 8){
    document.write("August")
}else if (n == 9){
    document.write("September")
}else if (n == 10){
    document.write("October")
}else if (n == 11){
    document.write("November")
}else if (n == 12){
    document.write("December")
}