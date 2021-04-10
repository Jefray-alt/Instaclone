import axios from '../../axios'
import {
	USER_REGISTER,
	USER_REQUEST_ERROR,
	USER_REQUEST_LOADING,
} from '../constants/userConstants'

export const registerUser = (value) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REQUEST_LOADING,
		})
		const { data } = await axios.post('/user/register', value)
		dispatch({
			type: USER_REGISTER,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: USER_REQUEST_ERROR,
			payload: error.message,
		})
	}
}
