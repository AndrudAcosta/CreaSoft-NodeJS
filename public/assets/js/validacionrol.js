
const validacionroles = () =>{
    let mensaje = "Campos obligatorios"
    let exito = "Registrado"
    if (nombre.value == "" ){
        alert(mensaje)
    } else {
        const nombre = document.querySelector('#nombre')
        alert(exito)
    }
}

const boton2 = document.querySelector('#boton2')
boton2.addEventListener('click',validacionroles);
