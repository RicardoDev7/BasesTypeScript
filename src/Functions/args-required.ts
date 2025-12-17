(() => {
    const setFullName = (firstName: string, lastName: string): string => {
        return `${firstName} - ${lastName}`;
    }
    const fullName = setFullName('Ricardo', 'Metzger');
    console.log(fullName);
})();