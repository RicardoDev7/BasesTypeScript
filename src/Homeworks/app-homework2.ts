// Funciones Básicas

const sumar = ( a: number, b: number ) : number => a + b;

const contar = ( heroes: Array<string> ) : number => heroes.length;

const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar: boolean = false ) : void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( ...personas: string[] ) : string => personas.join(", ");

// Tipo funcion
const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: Array<string> ) : void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco : (a: number, b: string, c: boolean, d: Array<string>) => void;
noHaceNadaTampoco = noHaceNada;