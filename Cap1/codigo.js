let dineroCofla = prompt("cuanto dinero tienes cofla");
let dineroRoberto = prompt("cuanto dinero tienes roberto");
let dineroPedro = prompt("cuanto dinero tienes pedro");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6) );
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1 ));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla comprate el bombon helado marca heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla comprate el bombon helado marca heladovich");
    alert("y te sobran " + (dineroCofla - 1.7 ));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla comprate el bombon helado marca helardo");
    alert("y te sobran " + (dineroCofla - 1.8) );
}
else if (dineroCofla >= 2.9 ) {
    alert("Cofla helado con canfites o el pote de 1/4kg");
    alert("y te sobran " + (dineroCofla - 2.9) );
}
else {
    alert("Cofla pobre de mierda no te alcanza para nada");
}
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto comprate el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto comprate el bombon helado marca heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto comprate el bombon helado marca heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto comprate el bombon helado marca helardo");
}
else if (dineroRoberto >= 2.9 ) {
    alert("Roberto helado con canfites o el pote de 1/4kg");
}
else {
    alert("Roberto pobre de mierda no te alcanza para nada");
}
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro comprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro comprate el bombon helado marca heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro comprate el bombon helado marca heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro comprate el bombon helado marca helardo");
}
else if (dineroPedro >= 2.9 ) {
    alert("Pedro helado con canfites o el pote de 1/4kg");
}
else {
    alert("pobre de mierda no te alcanza para nada");
}

//mejor forma 
// "use strict";
// const definirCompra = (n)=>{
//     let din = prompt(`Dinero de ${n}`);
//     if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
//     if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
//     if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
//     if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
//     if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
//     if (din >= 2.9) return (`${n}:helado de confites o pote de 1/4kg`);
//     else return (`${n}: No te alcanza par ningun helado pobre de mierda`);
// }

// console.log(definirCompra("Cofla"));
// console.log(definirCompra("Pedro"));
// console.log(definirCompra("Roberto"));


