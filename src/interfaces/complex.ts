(() => {
    interface Client {
        name: string,
        age?: number,
        address?: Address,
        getFullAddress(id: number) : void
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
        },
        getFullAddress(id: number) : void {
            console.log(this.address?.city);
        }
    }

    console.log(client);
    console.log(client.getFullAddress(1));

})();