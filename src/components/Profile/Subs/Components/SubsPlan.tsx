'use client'
import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface PlanProps {
	title: string
	price: string
	period: string
	features: string[]
	buttonText: string
	isPopular?: boolean
	isCurrent?: boolean
	accentColor?: string
}

export function SubsPlan({
	title,
	price,
	period,
	features,
	buttonText,
	isPopular,
	isCurrent,
	accentColor = 'from-indigo-500 to-purple-500',
}: PlanProps) {
	return (
		<div
			className={twMerge(
				'relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md w-full max-w-[450px]',
				isPopular &&
					'border-transparent bg-gradient-to-b from-indigo-50 to-white shadow-md',
				isCurrent && 'border-indigo-600 shadow-2xl'
			)}
		>
			{isPopular && (
				<span className='gradientBg absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow'>
					Most Popular
				</span>
			)}

			<div className='mb-4 flex items-center justify-between'>
				<h3 className='text-xl font-semibold text-gray-800'>{title}</h3>
				{isCurrent && (
					<span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600'>
						Current Plan
					</span>
				)}
			</div>

			<div className='mb-4'>
				<p className='text-4xl font-bold text-gray-900'>
					{price}
					<span className='text-base font-normal text-gray-500'>
						/ {period}
					</span>
				</p>
			</div>

			<button
				className={twMerge(
					'w-full rounded-lg py-2.5 text-white font-medium transition-all mb-[30px]',
					isCurrent
						? 'bg-gray-200 text-gray-600 cursor-not-allowed'
						: `bg-gradient-to-r ${accentColor} hover:opacity-90`
				)}
				disabled={isCurrent}
			>
				{isCurrent ? 'Current Plan' : buttonText}
			</button>

			<ul className='flex flex-col gap-2 text-sm text-gray-600'>
				{features.map((feature, i) => (
					<li key={i} className='flex items-center gap-2'>
						<Check className='h-4 w-4 text-indigo-500' />
						{feature}
					</li>
				))}
			</ul>
		</div>
	)
}
