import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IDealer } from 'app/shared/model/dealer/dealer.model';
import { DealerService } from './dealer.service';

@Component({
    selector: 'jhi-dealer-update',
    templateUrl: './dealer-update.component.html'
})
export class DealerUpdateComponent implements OnInit {
    dealer: IDealer;
    isSaving: boolean;

    constructor(protected dealerService: DealerService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ dealer }) => {
            this.dealer = dealer;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.dealer.id !== undefined) {
            this.subscribeToSaveResponse(this.dealerService.update(this.dealer));
        } else {
            this.subscribeToSaveResponse(this.dealerService.create(this.dealer));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IDealer>>) {
        result.subscribe((res: HttpResponse<IDealer>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
