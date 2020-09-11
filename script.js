swal("Hello world!" , "este es un subtitulo" , "warning");

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

function pintarNumero(numero) {
    //document.getElementById('data').value = numero
    pintarDatos(numero)
}
function pintarOperador(operador) {
    // document.getElementById('data').value = operador
    pintarDatos(` ${operador} `)
}
function pintarDatos(dato) {
    let valorInput = document.getElementById('data')
    //valorInput.value = valorInput.value + " " + dato
    valorInput.value = `${valorInput.value}${dato}`
}
function limpiar() {
    document.getElementById("data").value = ''
}
function mostrarResultado() {
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')
    console.log(arreglo)



    if (arreglo[1] == "+") {
        let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
        document.getElementById('data').value = suma
    } else if (arreglo[1] == "-") {
        let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
        document.getElementById('data').value = resta
    } else if (arreglo[1] == "*") {
        let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
        document.getElementById('data').value = multiplicar
    } else if (arreglo[1] == "/") {
        let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
        document.getElementById('data').value = dividir
    } else {
        swal("Error", "No seleccionaste ninguna Operacion", "error");
    }


    switch (arreglo[1]) {
        case '+':

    }
}
function preguntarDia() {
    let dia = prompt('¿Ingresa el Dia?')

    switch (dia) {
        case "lunes":
            alert("Digitaste Lunes")
            break

        case "Martes":
            alert("Digitaste Martes")
            break

        case "Miercoles":
            alert("Digitaste Miercoles")

        case "Jueves":
            alert("Digitaste Jueves")
            break

        case "Viernes":
            alert("Digitaste Viernes")
            break

        case "Sabado":
            alert("Digitaste Sabado")
            break

        case "Domingo ":
            alert("Digitaste Domingo")
            break
    }
}

 // let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
    //document.getElementById('data').value = suma

