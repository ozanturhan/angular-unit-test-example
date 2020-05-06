import { Actions, Store } from '@ngxs/store';
import { HttpTestingController } from '@angular/common/http/testing';

export interface TestBedCommon {
  actions$: Actions;
  store: Store;
  controller: HttpTestingController;
}
