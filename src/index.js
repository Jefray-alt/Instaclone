import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Windmill } from '@windmill/react-ui'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
	<React.StrictMode>
		<Windmill>
			<Provider store={store}>
				<App />
			</Provider>
		</Windmill>
	</React.StrictMode>,
	document.getElementById('root')
)
