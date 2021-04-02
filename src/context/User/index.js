import axios from '../../axios'
import React, { useReducer } from 'react'
import UserContext from './context'

import { REGISTER_USER, USER_LOADING_REQUEST } from './constant'
import userReducer from './reducer'

const UserState = (props) => {
	const [userState, dispatch] = useReducer(userReducer, {
		currentUser: {},
		requestLoading: false,
	})

	const registerUser = async (value) => {
		dispatch({ type: USER_LOADING_REQUEST, payload: true })
		const { data } = await axios.post('/user/register', value)

		dispatch({ type: USER_LOADING_REQUEST, payload: false })

		dispatch({
			type: REGISTER_USER,
			payload: data,
		})
	}

	return (
		<UserContext.Provider
			value={{
				currentUser: userState.currentUser,
				registerUser,
				requestLoading: userState.requestLoading,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserState
