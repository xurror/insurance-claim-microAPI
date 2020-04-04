import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InsuranceClaimAppSharedModule } from 'app/shared/shared.module';
import { PolicyComponent } from './policy.component';
import { PolicyDetailComponent } from './policy-detail.component';
import { PolicyUpdateComponent } from './policy-update.component';
import { PolicyDeleteDialogComponent } from './policy-delete-dialog.component';
import { policyRoute } from './policy.route';

@NgModule({
  imports: [InsuranceClaimAppSharedModule, RouterModule.forChild(policyRoute)],
  declarations: [PolicyComponent, PolicyDetailComponent, PolicyUpdateComponent, PolicyDeleteDialogComponent],
  entryComponents: [PolicyDeleteDialogComponent]
})
export class InsuranceClaimAppPolicyModule {}
