import { motion } from 'framer-motion'
import { useState } from 'react'
import { CiShare2 } from 'react-icons/ci'
import { SlPresent } from 'react-icons/sl'
import { twMerge } from 'tailwind-merge'
const value = 'https://example.com/referral?code=ABC123'
export function RefLink() {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<div className='flex flex-col justify-center items-center gap-y-[25px] w-[100%] '>
			<span className='gradientBg p-[25px] rounded-[50%] '>
				<SlPresent size={34} color='#fff' />
			</span>

			<div className='text-center leading-[35px]'>
				<h2 className='text-[21px] font-semibold'>Your Referral Link</h2>
				<p className='text-[16px] font-light text-[color:var(--secondGrey)]'>
					Share this link with friends and earn $20 for each successful referral
				</p>
				<div className='flex items-center gap-x-[25px] mt-[10px]'>
					<input className='form' type='text' value={value} readOnly />
					<button className='gradientBg   px-[20px] py-[15px] text-[#fff] whitespace-nowrap rounded-2xl'>
						Copy link
					</button>
				</div>
			</div>
			<motion.div
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				whileHover={{
					scale: 1.05,
					borderColor: '#3f3ff0',
				}}
				className='cursor-pointer w-fit  px-[10px] py-[15px] border-1 border-[#e0e0e0] rounded-2xl'
			>
				<motion.button className='flex items-center text-[16px] font-semibold gap-x-[15px] text-[color:var(--secondGrey)]'>
					<CiShare2
						size={23}
						color='#3f3ff0'
						className={twMerge(
							'transition-all duration-300 ',

							isHovered ? 'rotate-[-25deg]' : 'rotate-0 '
						)}
					/>
					Share via Social Media
				</motion.button>
			</motion.div>
		</div>
	)
}
