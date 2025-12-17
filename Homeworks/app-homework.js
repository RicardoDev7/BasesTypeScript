"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["minFuerza"] = 0] = "minFuerza";
        Fuerza[Fuerza["min1Fuerza"] = 1] = "min1Fuerza";
        Fuerza[Fuerza["min2Fuerza"] = 5] = "min2Fuerza";
        Fuerza[Fuerza["maxFuerza"] = 100] = "maxFuerza";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.min2Fuerza;
    const fuerzaSuperman = Fuerza.maxFuerza;
    const fuerzaBatman = Fuerza.min1Fuerza;
    const fuerzaAcuaman = Fuerza.minFuerza;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app-homework.js.map