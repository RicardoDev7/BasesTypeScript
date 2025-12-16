"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viaje en el tiempo']
    };
    console.log(flash);
    flash = {
        name: 'Clark Kent',
        //age: 60,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    console.log(flash.getName());
})();
//# sourceMappingURL=objects.js.map