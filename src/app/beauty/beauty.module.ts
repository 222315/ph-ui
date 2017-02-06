import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeautyComponent } from './beauty.component';
import { SharedModule } from '../shared';

const beautyRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'beauty',
    component: BeautyComponent,
  }
]);

@NgModule({
  imports: [
    beautyRouting,
    SharedModule
  ],
  declarations: [
    BeautyComponent
  ],

  providers: []
})
export class BeautyModule {}