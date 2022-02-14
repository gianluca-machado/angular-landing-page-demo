import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
    SharedModule,
  ],
  providers: [
    MainService,
  ],
})
export class MainModule { }
