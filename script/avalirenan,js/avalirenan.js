

function ex1() {
    const temperaturags = Number(prompt("digite graus celsisus"))

    const resultados = (9 * temperaturags + 160) / 5

    alert(resultados)
}
const buttonex1 = document.getElementById("ex1")
buttonex1.addEventListener("click", () => { ex1() })

function questao2() {
    const temperaturags = Number(prompt("digite graus celsisus"))

    const resultados = (9 * temperaturags + 160) / 5

    alert(resultados)
}
const buttonex2 = document.getElementById(" questao 2 ")
buttonex2.addEventListener("click", () => { questao2() })
function quetao3() {
    const Homemns = Number(prompt("digitte ao aultura"))

    const Mulheres = Number(prompt("digite  ao segunda aultura "))

    const resultados1 = 72.7 * - 58
    const resultados2 = 62.1 * - 44.7

 alert (resultados1 )
 alert (resultados2) } 

const buttonex3 = document.getElementById("questao3 ")
buttonex3.addEventListener("click", () => { questao3() } )

const numero1 = Number(prompt("digite um primeiro  numero"))
const numero2 = Number(prompt("digite um segundo   numero"))
function questao4() {
if (numero1 > numero2) {
    alert("maior" + numero1)

} else if (numero2 > numero1)
    alert("maior" + numero2)

else   { 
    alert("os numeros sao iguais ") 
 }
}
const buttonex4 = document.getElementById("questao4 ")
buttonex4.addEventListener("click", () => { questao4() })