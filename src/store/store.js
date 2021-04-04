import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import { appReducer } from './reducers/appReducers'

const reducer = combineReducers({
	appOptions: appReducer,
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
