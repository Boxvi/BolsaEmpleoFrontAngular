import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

import { SidenavComponent } from './components/panel/sidenav/sidenav.component';
import { BodyComponent } from './components/panel/body/body.component';
import { TopbarComponent } from './components/panel/topbar/topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    TopbarComponent,
    SidenavComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    FormsModule,
    HeaderComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
