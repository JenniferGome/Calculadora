/**innerHTML = lo utilizaremos para div,h,p buttons
 * si queremos modificar el valor de input lo vamos a hcer asi
 * document
 */
/**CONDICIONALES
 * nos permite validar si algo es sierto.
 * 
 * IF (true){
 *      console.log('es sieto')
 * }
 * 
 * If (true){
 * console.log(es sierto)
 * }else{
 *  console.log('no es sierto')
 * }
 * 
 * IF(true){
 *  console.log
 * }
 * 
 */

function pintarNumero(numero){
    //document.getElementById('data').value = numero
    pintarDatos(numero)
}
function pintarOperador(operador){
   // document.getElementById('data').value = operador
   pintarDatos(` ${operador} `)
}
function pintarDatos(dato){
    let  valorInput = document.getElementById('data')
    //valorInput.value = valorInput.value + " " + dato
    valorInput.value = `${valorInput.value}${dato}`
}
function limpiar(){
    document.getElementById("data").value= ''
}
function mostrarResultado(){
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')




   if(arreglo[1] == "+"){
        let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById("data").value = suma
    } else if (arreglo[1] == "-"){
        let resta = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById("data").value = restar
    }else if(arreglo[1] == "*"){
        let multiplicar = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById("data").value = multiplicar
    }else (arreglo[1] == "/")
        let dividir = parseInt(arreglo[0]) + parseInt(arreglo[2])
       document.getElementById("data").value = dividir   
  

   switch (arreglo[1]) {
       case '+':
           console.log('suma')
           let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
           document.getElementById('data').value = suma
           break;
    case'-':
    console.log('resta')
    let resta = parseInt(arreglo[0]) + parseInt(arreglo[2])
    document.getElementById('data').value = resta
    break;
    default:
        alert('no es + ni menos')

}
function preguntarDia(){
    let dia = prompt("Ingrese el dia")

    switch (dia){
        case"lunes":
        alert ("Digete dia")
    }




 // let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
    //document.getElementById('data').value = suma

