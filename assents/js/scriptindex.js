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
            alert("debe ingresar mas de 3 caracteres en el apellido")
            eErrorApellido.innerText = "debes ingresar mas de 3 caracteres!"
            eApellido.style.backgroundColor = "red"
            eApellido.style.color = "white"
        }

    let eEdad = document.getElementById("Edad");
    let vEdad = eEdad.value;
    let eErrorEdad = document.getElementById("ErrorEdad");

    if 
    (vEdad == "" || isNaN(vEdad) || parseInt(vEdad) != vEdad || vEdad <= 0) 
    {
        alert("El valor ingresado no es un valor numérico positivo y entero");
        eErrorEdad.innerText = "Debes ingresar un número entero positivo";
        eEdad.style.backgroundColor = "red";
        eEdad.style.color = "white";
    } 
    else if (vEdad >= 18) 
    {
        eErrorEdad.innerText = "";
        eEdad.style.backgroundColor = "green";
        eEdad.style.color = "white";
    } 
    else 
    {
        alert("Debe tener mínimo 18 años para ingresar");
        eErrorEdad.innerText = "Debes tener al menos 18 años";
        eEdad.style.backgroundColor = "red";
        eEdad.style.color = "white";
    }
}