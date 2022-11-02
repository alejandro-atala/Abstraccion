


abstract class AutoDeportivo{
   protected velocidadActual : number;
   protected estaPrendido: boolean;

   public constructor() {
    this.velocidadActual = 0;
    this.estaPrendido = false;
}

abstract acelerar() : void ;

public prender () : void {
    this.estaPrendido = true;
}

public apagar() : void {
    this.estaPrendido = false;
}
}

abstract class Camioneta  {
   protected velocidadActual : number;
   protected estaPrendido: boolean;

   public constructor() {
    this.velocidadActual = 0;
    this.estaPrendido = false;
}

abstract acelerar() : void ;

public prender () : void {
    this.estaPrendido = true;
}

public apagar() : void {
    this.estaPrendido = false;
}
}


abstract class AutoCiudad {
   protected velocidadActual : number;
   protected estaPrendido: boolean;

   public constructor() {
       this.velocidadActual = 0;
       this.estaPrendido = false;
   }

   abstract acelerar() : void ;

   public prender () : void {
       this.estaPrendido = true;
   }

   public apagar() : void {
       this.estaPrendido = false;
   }
}

class Deportivo extends AutoDeportivo  {

   public acelerar(): void {
       this.velocidadActual += 100;
   }
}
class Camio extends Camioneta  {

    public acelerar(): void {
        this.velocidadActual += 50;
    }
 }
 class Ciudad extends AutoCiudad  {

    public acelerar(): void {
        this.velocidadActual += 10;
    }
 }


let nuevoAutoDeportivo : Deportivo = new Deportivo();
let nuevoCamioneta : Camio = new Camio();
let nuevoAutoCiudad : Ciudad = new Ciudad();


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