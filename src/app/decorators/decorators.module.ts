import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DecoratorsComponent } from './decorators.component';
import { SharedModule } from '../shared';

const decoratorsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'decorators',
    component: DecoratorsComponent,
  }
]);

@NgModule({
  imports: [
    decoratorsRouting,
    SharedModule
  ],
  declarations: [
    DecoratorsComponent
  ],

  providers: []
})
export class DecoratorsModule {}