export function profileReducer(state = {}, action) {
    switch (action.type) {
        case "UPDATE_PROFILE":
            state = action.user
            return state
        case "UPDATE_PROFILE_FIELD":
            state = {
                ...state,
                [action.fieldName]: action.fieldValue
            }
            return state
        default:
            return state
    }
}

