namespace Validations {
    export const validateText = (text: string) : boolean  => {
        return (text.length >= 3);
    }
    const validateDate = (date : Date) : boolean => {
        return !isNaN(date.valueOf());
    }
}

console.log(Validations.validateText('RK7'));