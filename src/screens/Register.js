import { Button, Input, Label } from '@windmill/react-ui'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import Pulse from '../components/Loader/Pulse'
import { toggleNavbar } from '../store/actions/appActions'

const Register = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		dispatch(toggleNavbar(false))
	}, [dispatch])

	const onSubmit = (e) => {}

	return (
		<div className='px-3'>
			<div className='text-center'>
				<span className='block text-6xl font-light'>InstaClone</span>
			</div>

			<form onSubmit={onSubmit}>
				<div className='input-group my-5'>
					<Label>
						<span>First Name</span>
						<Input
							className='input--default'
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Label>
				</div>
				<div className='input-group my-5'>
					<Label>
						<span>Last Name</span>
						<Input
							className='input--default'
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Label>
				</div>
				<div className='input-group my-5'>
					<Label>
						<span>Username</span>
						<Input
							className='input--default'
							onChange={(e) => setUserName(e.target.value)}
						/>
					</Label>
				</div>
				<div className='input-group my-5'>
					<Label>
						<span>Email</span>
						<Input
							type='email'
							className='input--default'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Label>
				</div>
				<div className='input-group my-5'>
					<Label className>
						<span>Password</span>
						<Input
							type='password'
							className='input--default'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Label>
				</div>
				<Button type='submit' block className='uppercase'>
					register
				</Button>
			</form>
		</div>
	)
}

export default Register
