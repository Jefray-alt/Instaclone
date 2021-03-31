import './App.css'
import 'material-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './screens/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './screens/Home'
import AppContext from './context/App/index'

const App = () => {
	return (
		<AppContext>
			<Router>
				<Header />
				<div className='my-14 flex justify-center'>
					<div className='w-full max-w-lg'>
						<div className='my-2'>
							<Switch>
								<Route path='/' exact component={Home} />
								<Route path='/login' component={Login} />
							</Switch>
						</div>
					</div>
				</div>
				<Footer />
			</Router>
		</AppContext>
	)
}

export default App
