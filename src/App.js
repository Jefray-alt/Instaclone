import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './screens/Main'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
			</Switch>
		</Router>
	)
}

export default App
