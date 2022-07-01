let free = false;
const validarCliente =(time)=>{
    let edad = prompt("cual es tu edad?");
    if (edad > 18) {
        if(time >= 2 && time < 7 && free === false){
        alert("puedes pasar gratis por que eres la primera persona despues de las 2AM");
        free = true;
        } else {
            alert(`son las ${time}:00Hs y  puedes pasar pero tienes que pagar la entrada`);
        }
    } else {
        alert("no puede pasar un menor de edad");
    }
}
validarCliente(23);