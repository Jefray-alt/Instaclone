import { Button, HelperText, Input, Label } from '@windmill/react-ui'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

import Pulse from '../components/Loader/Pulse'
import { toggleNavbar } from '../store/actions/appActions'
import { registerUser } from '../store/actions/userActions'

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const history = useHistory()
	const dispatch = useDispatch()
	const userState = useSelector((state) => state.userDetails)

	useEffect(() => {
		dispatch(toggleNavbar(false))
	}, [dispatch])

	useEffect(() => {
		if (userState.currentUser) {
			history.push('/')
		}
		// eslint-disable-next-line
	}, [userState.currentUser])

	const onSubmit = (data) => {
		dispatch(registerUser(data))
	}

	return (
		<div className='px-3'>
			<div className='text-center'>
				<span className='block text-6xl font-light'>InstaClone</span>
			</div>
			{userState.isLoading ? (
				<Pulse />
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='input-group my-5'>
						<Label>
							<span>First Name</span>
							<Input
								{...register('firstName', { required: true })}
								className={
									errors.firstName ? 'input--invalid' : 'input--default'
								}
							/>
							<HelperText valid={false}>
								{errors.firstName && 'First name is required'}
							</HelperText>
						</Label>
					</div>
					<div className='input-group my-5'>
						<Label>
							<span>Last Name</span>
							<Input
								{...register('lastName', { required: true })}
								className={
									errors.lastName ? 'input--invalid' : 'input--default'
								}
							/>
							<HelperText valid={false}>
								{errors.lastName && 'Last name is required'}
							</HelperText>
						</Label>
					</div>
					<div className='input-group my-5'>
						<Label>
							<span>Username</span>
							<Input
								{...register('userName', { required: true })}
								className={
									errors.userName ? 'input--invalid' : 'input--default'
								}
							/>
							<HelperText valid={false}>
								{errors.userName && 'Username is required'}
							</HelperText>
						</Label>
					</div>
					<div className='input-group my-5'>
						<Label>
							<span>Email</span>
							<Input
								{...register('email', { required: true })}
								type='email'
								className={errors.email ? 'input--invalid' : 'input--default'}
							/>
							<HelperText valid={false}>
								{errors.email && 'Email is required'}
							</HelperText>
						</Label>
					</div>
					<div className='input-group my-5'>
						<Label className>
							<span>Password</span>
							<Input
								type='password'
								{...register('password', { required: true })}
								className={
									errors.password ? 'input--invalid' : 'input--default'
								}
							/>
							<HelperText valid={false}>
								{errors.password && 'Password is required'}
							</HelperText>
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
