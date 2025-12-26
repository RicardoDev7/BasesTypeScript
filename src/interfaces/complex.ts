(() => {
    interface Client {
        name: string,
        age?: number,
        address?: Address
    }

    interface Address{
        id: number,
        zip?: string,
        city: string
    }

    const client : Client = {
        name: 'Ricardo',
        age: 31,
        address: {
            id: 123,
            city: 'Lima'
        }
    }

    console.log(client);

})();