
//aula 01
// var nome="Altamir Silva";
// var idade=29;
// var idade2=10;
// var n1=5;
// var n2=3;
// var frase="Japão é o melhor time do mundo"
// // alert( nome +" tem " + idade + " anos")
// // alert(idade + idade2)
// console.log(nome);
// console.log(idade+idade2);
// console.log(frase);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// // alert(frase.replace("Japão", "Brasil"));
// console.log(n1*n2); 
// ******************************

//aula 2:
// var lista=["maçã", "pera", "laranja"];
// var fruta = {nome:"maçã", cor:"vermelha"}
// var frutas= [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(lista);
// console.log(lista.length); // exibe numero de itens da lista
// lista.push("uva");   // acrescenta valor à lista
// console.log(lista);
// console.log(lista[1]); // exibe item 1 da lista
// console.log(lista.length); // exibe como string
// console.log(lista.reverse()); // exibe ordem contraria dos itens
// console.log(lista.toString());
// console.log(lista.toString()[0]); //  aqui é mostrada a primeira letra do string, e não o primeiro item da lista, pois estamos trabalhandomcom array
// console.log(lista.join(" - ")); //também transfotma em String, mas eu escolho o que quero entreos itens

// lista.pop(lista);
// console.log(lista); // retira item da lista
// console.log(lista.length);
// lista.pop(lista);
// console.log(lista);
// console.log(lista.length);


// console.log(fruta);
// console.log(fruta.nome);
// console.log(fruta.cor);
// alert(frutas[0].nome);
// alert(frutas[0].cor)
// fim aula 2 
// *****************************************************************

//aula3  - if  e while
//var idade=18;
// var  idade= prompt("Qual sua idade?")

// if (idade >= 18){
//     alert("maior de idade");
// } 
// else {
//     alert("menor de idade");
// }

// var count = 0;
// while (count<=5) {
//     console.log(count);
//     alert(count);
//     // count = count+1;
//     count++
// } 
// ****************************************************

//aula 3 -   for
// var count1;
// for(count1=0; count1 <=5; count1++){
//     alert(count1)
// }

// aula 3  - date
// var d = new Date();
// alert(d);

// alert(" mes atual = " + (d.getMonth()+1));
// alert( "dia hoje: " + (d.getDay())); //   não deu certo essa. pq????


//***************************************

//aula 4
// function soma(n1, n2){
//     return n1+n2;
// }
// alert(soma(5,10));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

// alert(setReplace("Vai Japão", "Japão", "Brasil"));

// function validaIdade(idade){
//         var validar = true;
// }

//aula 5
function clicou(){
    alert("Obrigado por clicar")
}
function clicou2(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
}
function redirecionar(){
    window.open ("https://www.cursoemvideo.com/matricule-se-agora/?gclid=Cj0KCQiAxoiQBhCRARIsAPsvo-zIsUypICCPAYq4UVaKUWJGgWhI_ZzVOIEc8XfbsETYW-mCGX7QkBUaAt8AEALw_wcB");
   // window.location.href = "https://getbootstrap.com.br/docs/4.1/layout/grid/"; // aqui, abre na mesma janela
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "PASSE O MOUSE AQUI"
    //alert("trocar texto")
}
function trocar2(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    // dessa forma , com element na function, e (this) na chamada pode se usar a mesma function e m diversas linhas
}
function voltar2(elemento){
    elemento.innerHTML = "PASSE O MOUSE AQUI"
}
function funcaochange(elemento){
    console.log(elemento.value)
}