import { createAction, props } from '@ngrx/store';

export const shownNotificationAction = createAction(
    '[Notification] Show',
    props<{ message: string }>()
);