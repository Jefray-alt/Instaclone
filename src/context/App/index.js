import React, { useReducer } from 'react'
import AppContext from './context'
import reducer from './reducer'
import { TOGGLE_NAVBAR } from './constant'

const AppState = (props) => {
	const [appState, dispatch] = useReducer(reducer, { isNavbarEnabled: true })

	const toggleNavbar = (value) => {
		dispatch({
			type: TOGGLE_NAVBAR,
			payload: value,
		})
	}

	return (
		<AppContext.Provider
			value={{
				isNavbarEnabled: appState.isNavbarEnabled,
				toggleNavbar,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export default AppState
