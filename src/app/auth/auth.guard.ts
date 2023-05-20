import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { shownNotificationAction } from '../notification/notification.actions';
import { selectIsAuthenticated } from './auth.selector';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  //user is authenticated and if route is emp)ty string (login path) redirect to home
  const store = inject(Store)
  return store.pipe(
    select(selectIsAuthenticated),
    map((isAuthenticated: boolean) => {
      if (isAuthenticated && route.routeConfig?.path == "") {
        store.dispatch(shownNotificationAction({ message: "You are currently logged in" }))
        return (createUrlTreeFromSnapshot(route, ["/home"]));
      }
      else if (!isAuthenticated && route.routeConfig?.path != "")
        return (createUrlTreeFromSnapshot(route, ["/"]))
      console.log(isAuthenticated)
      return (true);
    }))
};
