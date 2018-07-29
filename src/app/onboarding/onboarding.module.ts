import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// import global material and module specific
import { OnboardingMaterialModule } from './onboarding.material.module'
import { MaterialModule } from '../material.module'

import { OnboardingRoutingModule } from './onboarding-routing.module'
import { SigninComponent } from './signin/signin.component'

@NgModule({
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    OnboardingMaterialModule,
    MaterialModule
  ],
  declarations: [ SigninComponent ]
})
export class OnboardingModule { }
