import { Card, CardBody } from '@windmill/react-ui'
import React from 'react'

const PostCard = () => {
	return (
		<Card>
			<div className='shadow-lg px-2 py-3 flex items-center'>
				<img
					src='https://picsum.photos/seed/profile/40'
					alt='sample'
					className='rounded-full'
				/>
				<span className='ml-3'>Name</span>
			</div>
			<img src='https://picsum.photos/seed/picsum/512' alt='sample' />
			<CardBody>
				<div className='flex flex-col'>
					<a href='#' className='font-bold'>
						11 Likes
					</a>
					<a href='#' className='text-gray-500'>
						View 1 comment(s)
					</a>
				</div>
			</CardBody>
		</Card>
	)
}

export default PostCard
