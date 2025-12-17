(() => {
    const fullName = (firstName: string, ...args: string[] ): string => {
        return `${firstName} ${args.join(' ') }`;
    };
    const superMan = fullName('Clark', 'Joseph', 'Kent');
    const batman = fullName('Bruce');
    const rick = fullName('Ricardo', 'Martin', 'Gaston', 'Metzger', 'Mejia');
    console.log({superMan});
    console.log({batman});
    console.log({rick});
})();