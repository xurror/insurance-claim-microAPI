import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { InsuranceClaimAppTestModule } from '../../../test.module';
import { MockEventManager } from '../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { PaymentScheduleDeleteDialogComponent } from 'app/entities/payment-schedule/payment-schedule-delete-dialog.component';
import { PaymentScheduleService } from 'app/entities/payment-schedule/payment-schedule.service';

describe('Component Tests', () => {
  describe('PaymentSchedule Management Delete Component', () => {
    let comp: PaymentScheduleDeleteDialogComponent;
    let fixture: ComponentFixture<PaymentScheduleDeleteDialogComponent>;
    let service: PaymentScheduleService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [InsuranceClaimAppTestModule],
        declarations: [PaymentScheduleDeleteDialogComponent]
      })
        .overrideTemplate(PaymentScheduleDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PaymentScheduleDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PaymentScheduleService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
