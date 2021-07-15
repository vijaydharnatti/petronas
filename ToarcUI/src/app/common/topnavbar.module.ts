import { NgModule } from '@angular/core';
import { SidenavbarComponent } from './sidenavbar.component';
import { TopnavbarRoutingModule } from './topnavbar-routing.moudle';
import { TopnavbarComponent } from './topnavbar.component';



@NgModule({
  declarations: [
    TopnavbarComponent,
    SidenavbarComponent
  ],
  imports: [
    TopnavbarRoutingModule
  ],
   exports: [],
  providers: [
   ],
})
export class TopnavbarModule { }
