import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StudioHomeComponent } from './studio-home/studio-home.component'
import { StudioComponent } from './studio.component'

const routes: Routes = [
  {
    path: '',
    component: StudioComponent,
    children: [
      { path: '', redirectTo: '/studio/home', pathMatch: 'full' },
      { path: 'home', component: StudioHomeComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }
