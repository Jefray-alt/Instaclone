import { TOGGLE_NAVBAR } from '../constants/appConstants'

export const toggleNavbar = (value) => (dispatch) => {
	dispatch({
		type: TOGGLE_NAVBAR,
		payload: value,
	})
}
