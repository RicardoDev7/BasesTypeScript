(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: Array<string>  = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerza{
        minFuerza = 0,
        min1Fuerza,
        min2Fuerza = 5,
        maxFuerza = 100
    }
    const fuerzaFlash : Fuerza = Fuerza.min2Fuerza;
    const fuerzaSuperman: Fuerza = Fuerza.maxFuerza;
    const fuerzaBatman: Fuerza = Fuerza.min1Fuerza;
    const fuerzaAcuaman: Fuerza = Fuerza.minFuerza;
  
    // Retorno de funciones
    function activar_batiseñal() : string{
      return 'activada';
    }
  
    function pedir_ayuda() : void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  