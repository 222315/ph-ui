import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuoteRequestComponent } from './quote-request.component';
import { SharedModule } from '../shared';

const quoteRequestRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'post-request',
    component: QuoteRequestComponent,
  }
]);

@NgModule({
  imports: [
    quoteRequestRouting,
    SharedModule
  ],
  declarations: [
    QuoteRequestComponent
  ],
  providers: []
})
export class QuoteRequestModule {}