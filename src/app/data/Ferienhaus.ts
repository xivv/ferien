import { Price } from './Price';

export interface Ferienhaus {

    name: string;
    description: string;
    hasWifi: boolean;
    hasShower: boolean;
    allowsPets: boolean;
    sparsaison: Price;
    vorsaison: Price;
    hauptsaison: Price;

    area: number;
    maxPersons: number;
    bathrooms: number;
    bedrooms: number;
}
