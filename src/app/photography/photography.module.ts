import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotographyComponent } from './photography.component';
import { SharedModule } from '../shared';

const photographyRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'photography',
    component: PhotographyComponent,
  }
]);

@NgModule({
  imports: [
    photographyRouting,
    SharedModule
  ],
  declarations: [
    PhotographyComponent
  ],

  providers: []
})
export class PhotographyModule {}