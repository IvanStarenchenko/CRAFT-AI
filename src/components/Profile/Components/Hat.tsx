import { DateTime } from '@/utils/date'

interface HatProps {
	title: string
	subtitle?: string
}

export function Hat({ title, subtitle }: HatProps) {
	return (
		<div className='flex justify-between items-center px-[17px] py-[15px] bg-[#fff] w-full rounded-2xl shadow-2xl'>
			<div>
				<h1 className='text-[24px] '>{title}</h1>
				<p className='mt-[5px] text-[16px] text-[color:var(--secondGrey)]'>
					{subtitle}
				</p>
			</div>
			<div>
				<DateTime />
			</div>
		</div>
	)
}
