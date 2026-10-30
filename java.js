/*Nombre min:3 max:20 validar espacios - requerido
Apellido max:30 validar espcaios - Requerido
Edad : Mayores a 18, menores a 90 - requerido
Provincia : Lista Desplegable - Validar que no este vacio - Requerido
Ciudad : max:60 - Validar espacios - Requerido
Presentacion : max:1000 - No requerido
*/
let form = document.querySelector("#formulario");
let nom = document.querySelector("#nombre");
let ape = document.querySelector("#apellido");
let edad = document.getElementById("edad");
let prov = document.querySelector("#provincia");
let ciu = document.querySelector("#ciudad");
let present = document.querySelector("#textArea");

const p_nom = document.querySelector("#nombre_p");
const p_ape = document.querySelector("#apellido_p");
const p_edad = document.querySelector("#edad_p");
const p_prov = document.querySelector("#provincia_p");
const p_ciu = document.querySelector("#ciudad")

let cont = 0;

present.addEventListener("input", (e) => {
    console.log(e.data);
    if(e.data == null){
        if(cont > 0){
            cont--;
            contador.innerHTML = cont + " / 1000";
        }
    }else{
        cont++;
        contador.innerHTML = cont + " / 1000";
    }
  
})

form.addEventListener("submit", () => {
    //Nombre
    nom = nom.trim;
    if(nom.lenght < 3){
        p_nom.textContent = "* Minimo 3 caracteres *";
    } else if(nom.lenght > 20){
        p_nom.textContent = "* Maximo 20 caracteres *";
    }
    
    //Apellido
    ape = ape.trim;
    if(ape.lenght > 30){
        p_ape.textContent = "* Maximo 30 caracteres *";
    }
    //Edad
    if(edad < 18 || edad > 90){
        p_edad.textContent = "* Edad fuera del rango permitido *";
    }

    //Ciudad
    ciu = ciu.trim;
    if(ciu.lenght > 60){
        p_ciu.textContent = "* Maximo 60 caracteres *";
    }
})