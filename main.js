let datoIngresado = prompt('Por favor ingrese su edad')

if (datoIngresado >= 18) {

    for (let i = 1; i <= datoIngresado; i++) {

        alert('Este es el mensaje ' + i)

    }
}
else {
    alert('este sitio es para mayores de edad :(')
}