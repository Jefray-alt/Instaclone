import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<nav className='fixed top-0 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 shadow-lg'>
				<div className='container flex items-center justify-between px-6 py-2'>
					<Link to='/' className='flex items-center py-2'>
						<span className='text-gray-600 material-icons mr-3'>
							camera_alt
						</span>
						<span className='text-gray-600 font-bold'>InstaClone</span>
					</Link>
				</div>
			</nav>
		</>
	)
}

export default Header
