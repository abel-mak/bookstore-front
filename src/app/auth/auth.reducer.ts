import { createReducer, on } from "@ngrx/store"
import { authenticatedAction, unauthenticatedAction } from "./auth.actions"

export interface IAuthState {
    isAuthenticated: boolean
}

export const initialState: IAuthState = {
    isAuthenticated: false,
}

export const authReducer = createReducer(
    initialState,
    on(authenticatedAction,
        (state: IAuthState) => ({ isAuthenticated: true })),
    on(unauthenticatedAction,
        (state: IAuthState) => ({ isAuthenticated: false }))
)