import { Button, Input, Label } from '@windmill/react-ui'
import React, { useContext, useState } from 'react'
import UserContext from '../context/User/context'

import Pulse from '../components/Loader/Pulse'
import { useHistory } from 'react-router'

const Register = () => {
	const { registerUser, requestLoading } = useContext(UserContext)
	const history = useHistory()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = (e) => {
		try {
			e.preventDefault()
			registerUser({
				firstName,
				lastName,
				userName,
				email,
				password,
			})
			history.push('/')
		} catch (error) {
			// TODO: create error handler for all catch blocks
			console.log(error)
		}
	}

	return (
		<div className='px-3'>
			<div className='text-center mt-16'>
				<span className='block text-6xl font-light'>InstaClone</span>
			</div>
			{requestLoading ? (
				<Pulse />
			) : (
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
			)}
		</div>
	)
}

export default Register
