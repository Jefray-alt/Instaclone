import {
	USER_REGISTER,
	USER_REQUEST_ERROR,
	USER_REQUEST_LOADING,
} from '../constants/userConstants'

export const userReducer = (
	state = { currentUser: null, error: null, isLoading: false },
	action
) => {
	const newState = { ...state }
	switch (action.type) {
		case USER_REGISTER:
			newState.currentUser = action.payload
			newState.isLoading = false
			return newState
		case USER_REQUEST_LOADING:
			newState.isLoading = true
			return newState
		case USER_REQUEST_ERROR:
			newState.error = action.payload
			newState.isLoading = false
			return newState
		default:
			return state
	}
}
