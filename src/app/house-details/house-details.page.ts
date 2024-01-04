import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.page.html',
  styleUrls: ['./house-details.page.scss'],
})
export class HouseDetailsPage {
  houseId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.houseId = params['id'];
    });
  }
}
