import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { InsuranceClaimAppTestModule } from '../../../test.module';
import { PaymentScheduleUpdateComponent } from 'app/entities/payment-schedule/payment-schedule-update.component';
import { PaymentScheduleService } from 'app/entities/payment-schedule/payment-schedule.service';
import { PaymentSchedule } from 'app/shared/model/payment-schedule.model';

describe('Component Tests', () => {
  describe('PaymentSchedule Management Update Component', () => {
    let comp: PaymentScheduleUpdateComponent;
    let fixture: ComponentFixture<PaymentScheduleUpdateComponent>;
    let service: PaymentScheduleService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [InsuranceClaimAppTestModule],
        declarations: [PaymentScheduleUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(PaymentScheduleUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PaymentScheduleUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PaymentScheduleService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PaymentSchedule(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new PaymentSchedule();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
