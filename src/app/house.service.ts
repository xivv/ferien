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
  },
  {
    name: 'Sieben Zwerge B',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    hasWifi: true,
    hasShower: true,
    allowsPets: true,
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
  },
  {
    name: 'Schneeweißchen',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    hasWifi: true,
    hasShower: true,
    allowsPets: false,
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

    let house: Ferienhaus = {
      name: 'No Data',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasWifi: true,
      hasShower: true,
      allowsPets: true,
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
    };

    this.houses.forEach(element => {

      if (element.name === name) {
        house = element;
      }
    });

    return house;
  }

  constructor() { }
}
