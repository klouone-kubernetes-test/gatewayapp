/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { GatewayappTestModule } from '../../../../test.module';
import { DealerComponent } from 'app/entities/dealer/dealer/dealer.component';
import { DealerService } from 'app/entities/dealer/dealer/dealer.service';
import { Dealer } from 'app/shared/model/dealer/dealer.model';

describe('Component Tests', () => {
    describe('Dealer Management Component', () => {
        let comp: DealerComponent;
        let fixture: ComponentFixture<DealerComponent>;
        let service: DealerService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GatewayappTestModule],
                declarations: [DealerComponent],
                providers: []
            })
                .overrideTemplate(DealerComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(DealerComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DealerService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Dealer(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.dealers[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
