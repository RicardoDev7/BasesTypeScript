"use strict";
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        name;
        age;
        gender;
        status;
        constructor(name, age, gender, status) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.status = status;
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.status = status;
        }
        printBio() {
            console.log(`${this.name} - ${this.gender}`);
        }
    }
})();
//# sourceMappingURL=main.js.map