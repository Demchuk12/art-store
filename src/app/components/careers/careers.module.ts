import {NgModule} from '@angular/core';
import {CareersComponent} from './careers.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CareersComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: CareersComponent
      }
    ])
  ]
})
export class CareersModule {

}
