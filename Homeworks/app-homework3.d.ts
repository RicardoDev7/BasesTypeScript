type Car = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
};
declare const batimovil: Car;
declare const bumblebee: Car;
type Villains = {
    nombre: string;
    edad: number | undefined;
    mutante: boolean;
};
declare const villanos: Array<Villains>;
type Charles = {
    poder: string;
    estatura: number;
};
type Apocalipsis = {
    lider: boolean;
    miembros: string[];
};
declare const charles: Charles;
declare const apocalipsis: Apocalipsis;
declare let mystique: (Charles | Apocalipsis);
//# sourceMappingURL=app-homework3.d.ts.map