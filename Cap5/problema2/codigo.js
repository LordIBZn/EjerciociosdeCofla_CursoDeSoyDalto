let trabajo = "240 minutos trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajo practico";
let homework ="30 minuros de tareas de la casa";
let descanso = "10 minutos de descanso";

console.log("Tareas");
for (let i = 0; i <14; i++){
    if (i == 0) {
        console.group("semana 1");
    }
console.groupCollapsed("dia " + (i + 1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 7) {
        console.groupEnd();
        console.groupCollapsed("semana 2");
    }
}


console.groupEnd();
console.groupEnd();