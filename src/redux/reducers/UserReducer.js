export function userReducer(state = {}, action) {
    switch (action.type) {
        case "UPDATE_USER_ITEMS":
            state = {
                ...state,
                itms: action.itms
            }
            return state
        default:
            return state
    }
}