export function authenticationReducer(state = {}, action) {
    switch(action.type) {
        case "UPDATE_AUTHENTICATION_ERROR":
            console.log("in reducer: UPDATE_AUTHENTICATION_ERROR");    
            state = {
                ...state,
                errorMessage: action.errorMessage
            }
            return state

        default:
            return state
    }
}

