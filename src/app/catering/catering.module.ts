import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CateringComponent } from './catering.component';
import { SharedModule } from '../shared';

const cateringRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'catering',
    component: CateringComponent,
  }
]);

@NgModule({
  imports: [
    cateringRouting,
    SharedModule
  ],
  declarations: [
    CateringComponent
  ],

  providers: []
})
export class CateringModule {}