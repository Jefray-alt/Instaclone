import './App.css'
import 'material-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import AppContext from './context/App/context'

/* Screen Components */
import Login from './screens/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './screens/Home'
import Register from './screens/Register'
import UserContext from './context/User/context'

const App = () => {
	const { isNavbarEnabled } = useContext(AppContext)
	const userContext = useContext(UserContext)

	useEffect(() => {
		console.log(userContext)
	}, [userContext])
	return (
		<Router>
			{isNavbarEnabled ? <Header /> : null}
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
			{isNavbarEnabled ? <Footer /> : null}
		</Router>
	)
}

export default App
