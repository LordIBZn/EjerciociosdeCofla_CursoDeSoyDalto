class App{
    constructor(descargas,puntuaciones,peso){
        this.descargas = descargas;
        this.puntuaciones = puntuaciones;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar (){
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }

    desinstalar (){
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }

    abrir (){
        if (this.iniciada == false && this.instalada == true ) {
            this.iniciada = true;
            alert("App iniciada");
        }
    }

    cerrar (){
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("App cerrada");
        }
    }
       appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuaciones: <b>${this.puntuaciones}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
       }
}

app = new App("16,000","3 estrellas", "500mb");
app2 = new App("12,000","4 estrellas", "800mb");
app3 = new App("11,000","2 estrellas", "700mb");
app4 = new App("15,000","3.5 estrellas","600mb");
app5 = new App("20,000","5 estrellas", "1100mb");
app6 = new App("9,000","3 estrellas", "200mb");
app7 = new App("18,000","4.5 estrellas", "900mb");

document.write(`
${app.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`);