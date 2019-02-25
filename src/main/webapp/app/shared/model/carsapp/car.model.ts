export interface ICar {
    id?: number;
    make?: string;
    brand?: string;
    price?: number;
}

export class Car implements ICar {
    constructor(public id?: number, public make?: string, public brand?: string, public price?: number) {}
}
