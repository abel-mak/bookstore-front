import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<IAuthState>('auth');

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state: IAuthState) => {
      return state.isAuthenticated
    }
  );