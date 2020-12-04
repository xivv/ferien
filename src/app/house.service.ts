import { Injectable } from '@angular/core';
import { Ferienhaus } from './data/Ferienhaus';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  public houses: Ferienhaus[] = [{
    name: 'Sieben Zwerge A',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    hasWifi: true,
    hasShower: true,
    allowsPets: true,
    area: 65,
    maxPersons: 7,
    bathrooms: 1,
    bedrooms: 3,
    sparsaison: {
      p2: 36,
      p34: 38,
      p56: 90,
      p78: 100
    },
    vorsaison: {
      p2: 36,
      p34: 38,
      p56: 90,
      p78: 100
    },
    hauptsaison: {
      p2: 36,
      p34: 38,
      p56: 90,
      p78: 100
    }
  }];

  public getByName(name: string): Ferienhaus {

    let house: Ferienhaus = this.houses[0];

    this.houses.forEach(element => {

      if (element.name === name) {
        house = element;
      }
    });

    return house;
  }

  constructor() {
    this.houses[1] = this.houses[0];
    this.houses[2] = this.houses[0];
  }
}
