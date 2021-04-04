import { TOGGLE_NAVBAR } from '../constants/appConstants'

export const appReducer = (state = { isNavbarEnabled: true }, action) => {
	switch (action.type) {
		case TOGGLE_NAVBAR:
			const newState = { ...state }
			newState.isNavbarEnabled = action.payload
			return newState
		default:
			return state
	}
}
