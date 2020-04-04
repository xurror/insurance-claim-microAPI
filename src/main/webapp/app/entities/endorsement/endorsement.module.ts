import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InsuranceClaimAppSharedModule } from 'app/shared/shared.module';
import { EndorsementComponent } from './endorsement.component';
import { EndorsementDetailComponent } from './endorsement-detail.component';
import { EndorsementUpdateComponent } from './endorsement-update.component';
import { EndorsementDeleteDialogComponent } from './endorsement-delete-dialog.component';
import { endorsementRoute } from './endorsement.route';

@NgModule({
  imports: [InsuranceClaimAppSharedModule, RouterModule.forChild(endorsementRoute)],
  declarations: [EndorsementComponent, EndorsementDetailComponent, EndorsementUpdateComponent, EndorsementDeleteDialogComponent],
  entryComponents: [EndorsementDeleteDialogComponent]
})
export class InsuranceClaimAppEndorsementModule {}
