"use strict";
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
//# sourceMappingURL=args-default.js.map