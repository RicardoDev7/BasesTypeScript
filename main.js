"use strict";
(() => {
    const a = 10;
    function sayHello(message) {
        console.log(`${message} - ${a}`);
    }
    sayHello('Hello TypeScript');
})();
(() => {
    const setFullName = (firstName, lastName, upper = false) => {
        const response = `${firstName} - ${lastName || '-----------'}`;
        return upper ? response.toUpperCase() : response;
    };
    const fullName = setFullName('Ricardo', 'Metzger', true);
    const fullName1 = setFullName('Ricardo', 'Metzger');
    console.log(fullName);
    console.log(fullName1);
})();
(() => {
    const setFullName = (firstName, lastName) => {
        return `${firstName} - ${lastName || '-----------'}`;
    };
    const fullName = setFullName('Ricardo');
    const fullName1 = setFullName('Ricardo', 'Metzger');
    console.log(fullName);
    console.log(fullName1);
})();
(() => {
    const setFullName = (firstName, lastName) => {
        return `${firstName} - ${lastName}`;
    };
    const fullName = setFullName('Ricardo', 'Metzger');
    console.log(fullName);
})();
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(' ')}`;
    };
    const superMan = fullName('Clark', 'Joseph', 'Kent');
    const batman = fullName('Bruce');
    const rick = fullName('Ricardo', 'Martin', 'Gaston', 'Metzger', 'Mejia');
    console.log({ superMan });
    console.log({ batman });
    console.log({ rick });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greetins = (name) => `Hello, ${name}`;
    const saveTheWorld = () => 'The world is safe';
    let myFunction;
    let myFunction1;
    let myFunction2;
    myFunction = addNumbers;
    console.log(myFunction);
    console.log(myFunction(1, 2));
    myFunction1 = greetins;
    console.log(myFunction1);
    console.log(myFunction1('Ricardo'));
    myFunction2 = saveTheWorld;
    console.log(myFunction2);
    console.log(myFunction2());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    console.log(returnName());
    const activeBatSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(activeBatSignal());
    console.log(typeof activeBatSignal);
})();
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
const sumar = (a, b) => a + b;
const contar = (heroes) => heroes.length;
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => personas.join(", ");
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    console.log(batimovil);
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    console.log(bumblebee);
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    console.log(villanos);
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    console.log(charles);
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    console.log(apocalipsis);
    let mystique;
    mystique = charles;
    console.log(mystique);
    mystique = apocalipsis;
    console.log(mystique);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viaje en el tiempo']
    };
    console.log(flash);
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Super Fuerza']
    };
    console.log(superman);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    console.log(flash);
    let superman = {
        name: 'Clark Kent',
        powers: [1, 3],
        getName() {
            return this.name;
        }
    };
    console.log(superman);
    console.log(superman.getName());
})();
(() => {
    let myCustomVariable = 'Ricardo';
    console.log({ myCustomVariable });
    myCustomVariable = 31;
    console.log({ myCustomVariable });
    myCustomVariable = {
        name: 'Ricardo',
        age: 31,
        powers: [7, 9, 10]
    };
    console.log({ myCustomVariable });
})();
(() => {
    let avenger = 123;
    console.log({ avenger });
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.1235431;
    console.log(avenger.toFixed(2));
    console.log({ exists });
    console.log({ power });
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.push(7);
    console.log('Numbers:', numbers);
    const villains = ['Thanos', 'Loki', 'Ultron'];
    villains.forEach((villain, i) => console.log(`Villain: ${i + 1}`, villain));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman });
    console.log({ isBatman });
    let message = isSuperman ? "I'm Superman" : "I'm not Superman";
    console.log({ message });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Error!!!!');
})();
(() => {
    let nothing = null;
    console.log(nothing);
    nothing = undefined;
    console.log(nothing);
    nothing = 1;
    console.log(nothing);
})();
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villains = 20;
    console.log({ villains });
    if (avengers < villains) {
        console.log("We are in trouble");
    }
    else {
        console.log("We are safe");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
(() => {
    const batman = 'Batman';
    const greenLantern = "Green Lantern";
    const blackVulcan = `Hero: Black Vulcan`;
    const abc = 123;
    console.log(`I'm '${batman.toUpperCase()}'`);
    console.log(`Longitud de '${greenLantern}' es: ${greenLantern.length}`);
    console.log(abc.toString());
    console.log(blackVulcan[30]?.toLowerCase() ?? 'No existe');
})();
(() => {
    const hero = ['Captian America', 100, true];
    const hero1 = ['Iron Man', 200];
    console.log(hero);
    console.log(hero1);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => { };
    const a = callBatman();
    console.log(a);
    const b = callSuperman();
    console.log(b);
})();
//# sourceMappingURL=main.js.map