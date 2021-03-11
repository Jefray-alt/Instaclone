import React from 'react'
import { Button } from '@windmill/react-ui'

const Footer = () => {
	return (
		<nav className='fixed bottom-0 w-full flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800'>
			<div className='container flex items-center justify-between px-6 py-2'>
				<ul className='flex w-full justify-around'>
					<li>
						<Button layout='link'>
							<span class='material-icons'>home</span>
						</Button>
					</li>
					<li>
						<Button layout='link'>
							<span class='material-icons'>forum</span>
						</Button>
					</li>
					<li>
						<Button layout='link'>
							<span class='material-icons'>explore</span>
						</Button>
					</li>
					<li>
						<Button layout='link'>
							<span class='material-icons'>notifications</span>
						</Button>
					</li>
					<li>
						<Button layout='link'>
							<span class='material-icons'>account_circle</span>
						</Button>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Footer
