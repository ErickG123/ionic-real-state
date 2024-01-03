import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetsStartPage } from './lets-start.page';

const routes: Routes = [
  {
    path: '',
    component: LetsStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetsStartPageRoutingModule {}
