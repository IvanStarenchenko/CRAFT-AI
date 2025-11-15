import type React from 'react'
import { twMerge } from 'tailwind-merge'
interface RefStatsItemProps {
	icon: React.ReactNode
	stat: string | number
	title: string
}
const gradientBlue = 'bg-gradient-to-b from-[#4299e1] to-[#3182ce] '
const gradientGreen = 'bg-gradient-to-b from-[#48bb78] to-[#38a169]'

export function RefStatsItem({ icon, stat, title }: RefStatsItemProps) {
	return (
		<div className='bg-[color:#fff] rounded-2xl p-[20px]'>
			<div className='flex flex-col gap-y-[15px]'>
				<span
					className={twMerge(
						'p-[15px] w-fit rounded-2xl text-center',

						title === 'Total Invites' && gradientBlue,
						title === 'Successful Referrals' && gradientGreen,
						title === 'Total Earned' && 'gradientBg'
					)}
				>
					{icon}
				</span>
				<div className='flex flex-col'>
					<span className='text-[32px] font-bold'>{stat}</span>
					<span className='text-[14px] font-light text-[color:var(--secondGrey)] '>
						{title}
					</span>
				</div>
			</div>
		</div>
	)
}
