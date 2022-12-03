
const validacionproductos = () =>{
    let mensaje = "Campos obligatorios"
    let exito = "Registrado"
    if (nombre.value == "" || material.value == "" || color.value == "" || precio.value == "" ){
        alert(mensaje)
    } else {
        const nombre = document.querySelector('#nombre')
        const material = document.querySelector('#material')
        const color = document.querySelector('#color')
        const precio = document.querySelector('#precio')
      
        alert(exito)
    }
}

const boton3 = document.querySelector('#boton3')
boton3.addEventListener('click',validacionproductos);
