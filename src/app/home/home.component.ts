import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public houseService: HouseService) {

  }

  ngOnInit(): void {
  }

  public GoTo(name: string): void {
    this.router.navigate(['house/' + name], { relativeTo: this.route });
  }

}
