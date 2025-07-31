const prompt = require('prompt-sync')();
 
console.log("--- PROGRAMA PARA CALCULAR EL IMC ---");
 
let altura = parseFloat(prompt("Ingrese su altura en CM: "));
let peso = parseFloat(prompt("Ingrese su peso corporal en KG: "));
let imc = 0.0;
 
 
if( isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
    console.log("Ingrese valores correctos para el peso y estatura.")
}else{
    imc = peso / (altura ** 2);
    let estado = "";
    //toFixed sirve para poner solamente 2 decimales
    console.log("Su IMC es de: " + imc.toFixed(2));
}
 
if(imc < 18.5){
    estado = "Usted tiene bajo peso, necesita mas alimentación."
}else if(imc >= 18.5 && imc < 24.9){
    estado = "Usted esta en su peso exacto, siga así!!"
}else if(imc >= 25 && imc < 29.9){
    estado = "Usted posee sobrepeso, cuide mas sus macros"
}else if(imc >= 30 && imc < 34.9){
    estado= "Usted tiene obesidad, tenga mas cuidado con la rutina Alimenticia"
}else{
   estado = "Usted tiene obesidad extrema, podrias tener problemas "
}