import { createAction } from "@ngrx/store";

export const authenticatedAction = createAction("[Auth] Authenticated");

export const unauthenticatedAction = createAction("[Auth] Unauthenticated");