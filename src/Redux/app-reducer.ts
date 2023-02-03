import {AppThunk} from "./redux-store";
import {setUserDataThunkCreator} from "./auth-reducer";

export type DataType = {
    initialized: boolean

}

export type ActionAppType = ReturnType<typeof setInitializedSuccess>

let initialState: DataType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: ActionAppType): DataType => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const setInitializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED-SUCCESS',
    } as const
}

export const initializeApp = (): AppThunk => (dispatch) => {
    const promise = dispatch(setUserDataThunkCreator())
    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess())
    })
}
