class Vehiculo{
    
    constructor(marca, modelo, patente){
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.velocidad = 0;
    };

    aumentarVelocidad(){
        this.velocidad += 30;
    };

    reducirVelocidad(){
        this.velocidad -= 10;
    };

    setPatente(patente){
        this.patente = patente;
    };
}

class Auto extends Vehiculo{
    constructor(marca, modelo, patente){
        super(marca, modelo, patente);
        this.altura = 3;
    }
}

var auto1 = new Vehiculo('Fiat', 'Cronos', 'AE456YR', );
var auto2 = new Vehiculo('Chevrolet', 'Onix', 'AE985VW');
var auto3 = new Vehiculo('Honda', 'HRV', 'AD745LK');

var auto4 = new Auto('Renault', 'Kangoo', 'AE610BR');

console.log(auto1);
console.log(auto1.velocidad);

auto1.aumentarVelocidad();
auto1.aumentarVelocidad();
auto1.aumentarVelocidad();

document.write("<h2>" + auto1.marca + ' - ' + auto1.modelo + ' - ' + auto1.velocidad + "<h2>");
document.write("<h2>" + auto2.marca + ' - ' + auto2.modelo + ' - ' + auto2.velocidad + "<h2>");
document.write("<h2>" + auto3.marca + ' - ' + auto3.modelo + ' - ' + auto3.velocidad + "<h2>");
document.write("<h2>" + auto4.marca + ' - ' + auto4.modelo + ' - ' + auto4.velocidad + + auto4.altura + "<h2>");

console.log(auto1);