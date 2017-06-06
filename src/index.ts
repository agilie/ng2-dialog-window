import { NgModule } from '@angular/core';
import { Ng2DialogWindowComponent } from './ng2-dialog-window.component';

export * from './ng2-dialog-window.component';
export * from './ng2-dialog-window.service';

@NgModule({
  imports: [],
  declarations: [
    Ng2DialogWindowComponent
  ],
  providers: [],
  exports: [
    Ng2DialogWindowComponent
  ]
})
export class Ng2DialogWindowModule {

}
