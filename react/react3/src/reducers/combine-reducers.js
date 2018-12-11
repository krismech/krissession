import { combineReducers } from "redux"
import UserReducers from './reducer-users'
import MovieReducers from './reducer-movies'
import ReducerUserClicked from './reducer-userclicked'


combineReducers({})

const allReducers= combineReducers({
users:UserReducers,
movies:MovieReducers,
clickeduser: ReducerUserClicked


})


export default allReducers