import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { DetailsComponent } from './details.component';

const routes: Route[] = [{ path: '', component: DetailsComponent }];

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DetailsModule {
  constructor() {}
}
