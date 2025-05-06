function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("ErrorNombre")

    console.log(eNombre)
    console.log(vNombre)
    if(vNombre.length >=3)
        {
            console.log("si cumple")
            eErrorNombre.innerText=" "
            eNombre.style.backgroundColor = "green"
            eNombre.style.color = "white"
        }
    else
        {
            console.log("no cumple")
            alert("debe ingresar mas de 3 caracteres en el nombre")
            eErrorNombre.innerText = "debes ingresar mas de 3 caracteres!"
            eNombre.style.backgroundColor = "red"
        }

    let eApellido = document.getElementById("Apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("ErrorApellido")

    console.log(eApellido)
    console.log(vApellido)
    if(vApellido.length >=3)
        {
            console.log("si cumple")
            eErrorApellido.innerText=" "
            eApellido.style.backgroundColor = "Green"
            eApellido.style.color = "white"
        }
    else
        {
            console.log("no cumple")
            
        }
}