

const validacionusuarios = () =>{
    let mensaje = "Campos obligatorios"
    let exito = "Registrado"
    if (usuario.value == "" || correo.value == "" || direccion.value == "" || numero.value == "" || documento.value == ""){
        alert(mensaje)
    } else {
        const usuario = document.querySelector('#usuario')
        const correo = document.querySelector('#correo')
        const direccion = document.querySelector('#direccion')
        const numero = document.querySelector('#numero')
        const documento = document.querySelector('#documento')
        alert(exito)
    }
}

const boton1 = document.querySelector('#boton1')
boton1.addEventListener('click',validacionusuarios)







