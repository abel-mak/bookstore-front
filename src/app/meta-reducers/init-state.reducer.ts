import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { inject } from "@angular/core";


export function initState(reducer: ActionReducer<any>): ActionReducer<any> {
    const localStorageService = inject(LocalStorageService);
    return (state: any, action: any) => {
        const newState = reducer(state, action);
        if (INIT.toString() == action.type) {
            return {
                ...newState,
                ...localStorageService.loadInitialState()
            };
        }
        localStorageService.updateState(newState);
        return newState;
    }
}