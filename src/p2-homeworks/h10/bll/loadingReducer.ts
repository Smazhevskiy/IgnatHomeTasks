

 type InitStateType = {
    isLoading:boolean
}

const initState:InitStateType = {
    isLoading: false
}



type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "IS-LOADING":
            return {...state, isLoading:action.isLoading}
        default:
            return state
    }
}

export const loadingAC = (isLoading:boolean) => {
    return {type: 'IS-LOADING', isLoading}
} // fix any