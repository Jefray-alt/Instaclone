import { Button, Label } from '@windmill/react-ui'
import { useContext, useEffect } from 'react'
import Pulse from '../components/Loader/Pulse'
import AppContext from '../context/App/context'

const Login = () => {
	const { toggleNavbar } = useContext(AppContext)

	useEffect(() => {
		toggleNavbar(false)
		// eslint-disable-next-line
	}, [])

	return (
		<div className='px-3'>
			<div className='text-center mt-16'>
				<span className='block text-6xl font-light'>InstaClone</span>
			</div>
			<form>
				<div className='input-group my-5'>
					<Label>
						<span>Username</span>
						<input className='input--default' />
					</Label>
				</div>
				<div className='input-group my-5'>
					<Label className>
						<span>Password</span>
						<input type='password' className='input--default' />
					</Label>
				</div>
				<Button block>LOGIN</Button>
			</form>
		</div>
	)
}

export default Login
