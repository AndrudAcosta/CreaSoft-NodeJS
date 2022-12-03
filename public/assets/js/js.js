const users = [
{
    id: "1",
    nombre:"jesus",
    contrasena:"123"
},{
    id: "2",
    nombre:"juan",
    contrasena:"12345"
}
]

/*  */
const getuser = () =>{
    let user = document.querySelector('#user').value
    let password = document.querySelector('#password').value
    return new Promise((resolve,reject) =>{
        let existe = false
        users.forEach(usuario => {
            if(usuario.nombre==user && usuario.contrasena == password){
                existe = true
            }
        })
        if (existe == true) {
           
            location.href ="roles";
           //window.open("dashboard/roles.html", "_self");
           
           }else{
            reject(alert('No encontrado')) //Si la búsqueda no fue exitosa
           }
            
        })

}

const validar = document.querySelector('#boton')
validar.addEventListener('click',getuser)

