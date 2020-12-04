import { combineReducers } from 'redux'
import AuthReducers from './AuthReducers'
import UserReducers from './UserDataReducers'

export default combineReducers({
    Auth: AuthReducers,
    User: UserReducers
})