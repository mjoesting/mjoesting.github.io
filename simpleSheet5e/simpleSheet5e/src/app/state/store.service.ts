
import { Injectable } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';
import { DataService } from '../services/data.service';
import { StoreData } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public store: any;

  constructor(private dataService: DataService) {
    this.store = signalState(this.dataService.initData());
  }

  getCurrentStoreData() {
    return this.store();
  }

  updateState(newState: Partial<StoreData>): Observable<StoreData> {
    patchState(this.store, newState);
    return of(this.getCurrentStoreData());
  }
}
