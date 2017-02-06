import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VenuesComponent } from './venues.component';
import { SharedModule } from '../shared';

const venuesRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'venues',
    component: VenuesComponent,
  }
]);

@NgModule({
  imports: [
    venuesRouting,
    SharedModule
  ],
  declarations: [
    VenuesComponent
  ],

  providers: []
})
export class VenuesModule {}