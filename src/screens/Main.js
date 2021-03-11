import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'

const Main = () => {
	return (
		<>
			<Header />
			<div className='my-14 w-screen flex justify-center'>
				<div className='w-full max-w-lg my-2'>
					<Switch>
						<Route path='/' exact component={Home} />
					</Switch>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Main
