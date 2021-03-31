import { TOGGLE_NAVBAR } from './constant'

const appReducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_NAVBAR:
			const newState = { ...state }
			newState.isNavbarEnabled = action.payload
			return newState
		default:
			return state
	}
}

export default appReducer
