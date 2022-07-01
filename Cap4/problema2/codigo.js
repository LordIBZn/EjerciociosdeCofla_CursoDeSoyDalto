const obtenerInformacion = (materia)=>{
   const materias = {
        fisica:["Pepe","pedro","pepe","cofla","maria"],
        quimica:["Dalto","pedro","jose","pepe"],
        programacion:["Cesar","pedro","jose","pepe","cofla","maria"],
        logica:["Hernandez","pedro","jose","pepe","cofla","maria"]
    }
    if(materias[materia] !== undefined){
        return[materias[materia],materia,materias];
    } else {
        return materias;
    }
}
const mostrarInformacion = (materia)=>{
let informacion = obtenerInformacion(materia);

if(informacion !== false){
    let profresor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(`el profesor es <b>${informacion[1]}</b>: <b>${profresor}</b><br>
    los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`);
}
}

const CantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
            
        }
    }
    return `<b style='color:blue'>${alumno}</b> esta en ${cantidadTotal} clases </b> Esta cursando las clases:${clasesPresentes} <b></b><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(CantidadDeClases("cofla"));
document.write(CantidadDeClases("pedro"));

