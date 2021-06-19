var nombre = 'Randhal';
var apellido = 'rangel'

var estaciones = ['Verano','Otoño','Invierno','Primavera'];

estaciones.forEach((nombre) =>{

    document.write(nombre + '</br>');
});

var Auto = {
    marca: 'Fiat',
    modelo: 'Cronos 1.3',
    color: 'Blanco',
    patente: 'AE493YR'
};

document.write("<h2>" + Auto.marca + ' - ' + Auto.modelo + "<h2>");

var saludar = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        let saludo = 'Hola como estas, soy randhall';
        let saludo2 = null;
        if (saludo2){
            resolve(saludo);
        }
        else{
            reject('No existe Saludo');
        }
    }, 3000);
});


saludar.then(result => {
    alert(result);
})
.catch(err =>{
    alert(err);
});