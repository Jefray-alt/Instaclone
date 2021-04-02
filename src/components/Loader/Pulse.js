import React from 'react'

const Pulse = ({ label }) => {
	return (
		<div className='flex flex-col items-center'>
			<div className='lds-ellipsis'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{label ? (
				<span className='text-purple-500 uppercase font-bold'>{label}</span>
			) : null}
		</div>
	)
}

export default Pulse
