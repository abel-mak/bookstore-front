import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from "@ngrx/effects";
import { authenticatedAction, unauthenticatedAction } from './auth.actions';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, 
        private router: Router,
        private localStorageService: LocalStorageService) {
    }

    //effect that is listening for authenticated action
    authenticatedEffect = createEffect(() => {
        return this.actions$.pipe(ofType(authenticatedAction),
            tap(() => {
                this.router.navigate(['/home']);
            }))
    }, {dispatch: false})

    unauthenticatedEffect = createEffect(() => {
        return this.actions$.pipe(ofType(unauthenticatedAction),
            tap(() => {
                this.router.navigate(['/']);
            }))
    }, {dispatch: false})
}