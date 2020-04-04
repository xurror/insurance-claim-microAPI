import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.InsuranceClaimAppCustomerModule)
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(m => m.InsuranceClaimAppAddressModule)
      },
      {
        path: 'claim',
        loadChildren: () => import('./claim/claim.module').then(m => m.InsuranceClaimAppClaimModule)
      },
      {
        path: 'payment-schedule',
        loadChildren: () => import('./payment-schedule/payment-schedule.module').then(m => m.InsuranceClaimAppPaymentScheduleModule)
      },
      {
        path: 'quote',
        loadChildren: () => import('./quote/quote.module').then(m => m.InsuranceClaimAppQuoteModule)
      },
      {
        path: 'mta',
        loadChildren: () => import('./mta/mta.module').then(m => m.InsuranceClaimAppMTAModule)
      },
      {
        path: 'policy',
        loadChildren: () => import('./policy/policy.module').then(m => m.InsuranceClaimAppPolicyModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.InsuranceClaimAppProductModule)
      },
      {
        path: 'endorsement',
        loadChildren: () => import('./endorsement/endorsement.module').then(m => m.InsuranceClaimAppEndorsementModule)
      },
      {
        path: 'document',
        loadChildren: () => import('./document/document.module').then(m => m.InsuranceClaimAppDocumentModule)
      },
      {
        path: 'policy-holder',
        loadChildren: () => import('./policy-holder/policy-holder.module').then(m => m.InsuranceClaimAppPolicyHolderModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class InsuranceClaimAppEntityModule {}
