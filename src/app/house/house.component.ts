import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ferienhaus } from '../data/Ferienhaus';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  house: Ferienhaus;

  constructor(private route: ActivatedRoute, houseService: HouseService) {

    const name = this.route.snapshot.paramMap.get('name') || '';
    this.house = houseService.getByName(name);
  }


  ngOnInit(): void {

  }

}
