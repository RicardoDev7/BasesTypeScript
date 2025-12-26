"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length >= 3);
    };
    const validateDate = (date) => {
        return !isNaN(date.valueOf());
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('RK7'));
//# sourceMappingURL=main.js.map