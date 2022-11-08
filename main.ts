abstract class Automovil{
    protected velocidadActual : number;
    protected estaPrendido: boolean;

    public constructor(){
        this.velocidadActual = 0;
        this.estaPrendido = true;
    }
    abstract acelerar() : void ;

    public prender () : void {
        this.estaPrendido = true;
    }
    
    public apagar() : void {
        this.estaPrendido = false;
    }

}


 class AutoDeportivo extends Automovil{

    public acelerar(): void {
        this.velocidadActual = 100;
    }

}

 class Camioneta extends Automovil {

    public acelerar(): void {
        this.velocidadActual = 50;
    }
}


 class AutoCiudad extends Automovil{

    public acelerar(): void {
        this.velocidadActual = 10;
    }
}

let nuevoAutoCiudad :AutoCiudad = new AutoCiudad;
let nuevoAutoDeportivo :AutoDeportivo = new AutoDeportivo;
let nuevoCamioneta :Camioneta = new Camioneta;

nuevoAutoCiudad.acelerar();
console.log(nuevoAutoCiudad);
nuevoAutoDeportivo.acelerar();
console.log(nuevoAutoDeportivo);
nuevoCamioneta.acelerar();
console.log(nuevoCamioneta);
nuevoAutoCiudad.apagar();
console.log(nuevoAutoCiudad);
nuevoAutoDeportivo.apagar();
console.log(nuevoAutoDeportivo);
nuevoCamioneta.apagar();
console.log(nuevoCamioneta);