import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Windmill } from '@windmill/react-ui'
import AppContextProvider from './context/App/index'

ReactDOM.render(
	<React.StrictMode>
		<Windmill>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</Windmill>
	</React.StrictMode>,
	document.getElementById('root')
)
