(() => {
    
    // Crear interfaces

    // Cree una interfaz para validar el auto 
    // (el valor enviado por parametro)

    interface Auto {
        encender: boolean;
        velocidadMaxima: number;
        acelear() : void;
    }
    
    const conducirBatimovil = ( auto : Auto ) : void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    }
    
    const batimovil : Auto = {
        encender:false,
        velocidadMaxima:0,
        acelear(){
            console.log("...... gogogo!!!");
        }
    }
    
    // Cree una interfaz con que permita utilizar el siguiente 
    // objeto utilizando propiedades opcionales

    interface Guason {
        reir?: boolean;
        comer?: boolean;
        llorar?: boolean;
    }

    const guason : Guason = {
        reir: true,
        comer:true,
        llorar:false
    }
    
    const reir = ( guason : Guason ):void => {
        if( guason.reir ){
            console.log("JAJAJAJA");
        }
    }
    
    // Cree una interfaz para la siguiente funcion
    
    interface CiudadGoticaFunction {
        (a: string[]) : number;
    }

    const ciudadGotica : CiudadGoticaFunction = ( ciudadanos : string[] ) : number => {
        return ciudadanos.length;
    }
    
    // Cree una interfaz que obligue crear una clase
    // con las siguientes propiedades y metodos

    /*
        propiedades:
        - nombre
        - edad
        - sexo
        - estadoCivil
        - imprimirBio(): void // en consola una breve descripcion.
    */

    interface Person{
        name: string;
        age: number;
        gender: string;
        status: string;
        printBio() : void;
    }

    class Persona implements Person {
        constructor(
            public name: string,
            public age: number,
            public gender: string,
            public status: string
        )
        {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.status = status;
        }

        public printBio(): void {
            console.log(`${this.name} - ${this.gender}`);
        }
    }




})();