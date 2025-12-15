"use strict";
(() => {
    const setFullName = (firstName, lastName) => {
        return `${firstName} - ${lastName || '-----------'}`;
    };
    const fullName = setFullName('Ricardo');
    const fullName1 = setFullName('Ricardo', 'Metzger');
    console.log(fullName);
    console.log(fullName1);
})();
//# sourceMappingURL=args-optional.js.map