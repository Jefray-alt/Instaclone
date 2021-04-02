import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Windmill } from '@windmill/react-ui'
import AppContextProvider from './context/App/index'
import UserContextProvider from './context/User/index'

ReactDOM.render(
	<React.StrictMode>
		<Windmill>
			<AppContextProvider>
				<UserContextProvider>
					<App />
				</UserContextProvider>
			</AppContextProvider>
		</Windmill>
	</React.StrictMode>,
	document.getElementById('root')
)
