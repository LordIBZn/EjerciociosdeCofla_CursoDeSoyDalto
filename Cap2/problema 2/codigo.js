let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales =[];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt(`nombre del alumno ` + (i +1)),0];
}

const tomarLista = (nombre,p) => {
    let presencia = prompt(nombre);
    if (presencia === "p" || presencia == "p"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i<=30; i++){
    for (alumno in alumnosTotales){
        tomarLista(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ______Presentes : ${alumnosTotales[alumno][1]}: <br>
    ______Ausencias : ${30 - parseInt(alumnosTotales[alumno][1])}: <br> `;
    
    if ( 30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "reprado por inasistencias <br>";
    } else{
        resultado+= "<br><br>";
    }
    document.write(resultado);
}