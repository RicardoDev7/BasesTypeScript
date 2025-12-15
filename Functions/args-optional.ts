(() => {
    const setFullName = (firstName: string, lastName?: string): string => {
        return `${firstName} - ${lastName || '-----------'}`;
    }
    const fullName = setFullName('Ricardo');
    const fullName1 = setFullName('Ricardo', 'Metzger');
    console.log(fullName);
    console.log(fullName1);
})();