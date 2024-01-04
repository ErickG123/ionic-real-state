import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  houses: any = [];

  constructor(private router: Router) {
    for (let i = 1; i <= 3; i++) {
      this.houses.push({
        id: i,
        name: `Anggrek Grove Residences ${i}`,
        price: `$${1000 + i * 100}`,
        isBookmarked: false,
        stars: `${Math.floor(Math.random() * 5) + 1}.${Math.floor(Math.random() * 9)}`,
        totalViews: Math.floor(Math.random() * 50) + 1,
        locale: 'Bandung, West Java',
        totalBeds: Math.floor(Math.random() * 5) + 1,
        totalBaths: Math.floor(Math.random() * 3) + 1
      });
    }
  }

  toggleBookmark(index: number) {
    this.houses[index].isBookmarked = !this.houses[index].isBookmarked;
  }

  goToDetails(id: number) {
    this.router.navigate(['/house-details', id]);
  }
}
