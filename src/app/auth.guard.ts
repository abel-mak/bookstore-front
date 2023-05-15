import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = true;
  if (!isAuthenticated)
    return createUrlTreeFromSnapshot(route, ["/"])
  return true;
};
