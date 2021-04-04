import './App.css'
import 'material-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

/* Screen Components */
import Login from './screens/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './screens/Home'
import Register from './screens/Register'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const App = () => {
	const app = useSelector((state) => state.appOptions)

	useEffect(() => {
		console.log(app.isNavbarEnabled)
	}, [app.isNavbarEnabled])

	return (
		<Router>
			{app.isNavbarEnabled ? <Header /> : null}
			<div className='my-14 flex justify-center'>
				<div className='w-full max-w-lg'>
					<div className='my-2'>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/login' component={Login} />
							<Route path='/register' component={Register} />
						</Switch>
					</div>
				</div>
			</div>
			{app.isNavbarEnabled ? <Footer /> : null}
		</Router>
	)
}

export default App
