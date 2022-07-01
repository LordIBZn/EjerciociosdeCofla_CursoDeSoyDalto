let materias = {
    fisica:["Pepe","pedro","pepe","cofla","maria"],
    quimica:["Dalto","pedro","jose","pepe"],
    programacion:["Cesar","pedro","jose","pepe","cofla","maria"],
    logica:["Hernandez","pedro","jose","pepe","cofla","maria"]
}

const inscribir = (alumno, materia)=>{
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`lo siento <b> ${alumno},</b> las clases de <b> ${materia}</b> ya estan llenas` + "<br>");
    } else{
        personas.push(alumno); 
        if (materia == "fisica") {
            materias = {
                fisica:personas,
                quimica:materias["quimica"],
                programacion:materias["programacion"],
                logica:materias["logica"]
            }
        }
        else if (materia == "quimica") {
            materias = {
                fisica:materias["fisica"],
                quimica:personas,
                programacion:materias["programacion"],
                logica:materias["logica"]
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica:materias["fisica"],
                quimica:materias["quimica"],
                programacion:personas,
                logica:materias["logica"]
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica:materias["fisica"],
                quimica:materias["quimica"],
                programacion:materias["programacion"],
                logica:personas
            }
        }
        document.write(`${alumno} te has inscrito a ${materia} correctamente ` + "<br>" );
    }
    
}

inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
inscribir("pepe", "fisica");
