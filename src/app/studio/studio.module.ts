import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StudioRoutingModule } from './studio-routing.module'
import { StudioHomeComponent } from './studio-home/studio-home.component'
import { StudioComponent } from './studio.component'
import { MaterialModule } from '../material.module'

@NgModule({
  imports: [
    CommonModule,
    StudioRoutingModule,
    MaterialModule
  ],
  declarations: [
    StudioComponent,
    StudioHomeComponent
  ]
})
export class StudioModule { }
