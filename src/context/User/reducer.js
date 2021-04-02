import { REGISTER_USER, USER_LOADING_REQUEST } from './constant'

const userReducer = (state, action) => {
	const newState = { ...state }

	switch (action.type) {
		case REGISTER_USER:
			newState.currentUser = action.payload
			return newState
		case USER_LOADING_REQUEST:
			newState.requestLoading = action.payload
			return newState
		default:
			return state
	}
}

export default userReducer
