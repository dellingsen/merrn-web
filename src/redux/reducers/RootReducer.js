import { combineReducers } from 'redux'
import { userReducer } from './UserReducer'
import { filesReducer } from './FilesReducer'
import { authenticationReducer } from './AuthenticationReducer'
import { profileReducer } from './ProfileReducer'

export default combineReducers(
    {
        user: userReducer,
        files: filesReducer,
        authentication: authenticationReducer,
        profile: profileReducer
    }
)