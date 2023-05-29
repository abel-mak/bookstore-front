import { createEffect } from "@ngrx/effects";
import { Actions, ofType } from "@ngrx/effects";
import { shownNotificationAction } from "./notification.actions";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, tap } from 'rxjs/operators';

@Injectable()
export class NotificationEffect {
    constructor(private actions$: Actions,
        private snackBar: MatSnackBar) {

    }

    showNotification = createEffect(() => {
        return this.actions$.pipe(ofType(shownNotificationAction),
            tap(({ message }) => {
                this.snackBar.open(message, 'Close', { duration: 3000 })
            }))
    }, { dispatch: false })

}