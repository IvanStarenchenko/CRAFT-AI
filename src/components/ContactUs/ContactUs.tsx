'use client'
import { usePathname } from 'next/navigation'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Left } from './ContactUsComponents/Left'
import { Right } from './ContactUsComponents/Right'
export function ContactUs() {
	const pathname = usePathname()
	const formattedPathname = pathname.replace('/', '')

	return (
		<div className='flex flex-col gap-y-[28px]'>
			<Breadcrumbs>{formattedPathname}</Breadcrumbs>
			<div>
				<h1 className='main-title'>Контакты</h1>
				<span className='main-subtitle'>Мы на связи в любое удобное время</span>
				<div className='grid grid-cols-[453px_945px] justify-between gap-x-[40px] mt-[32px]'>
					<Left />
					<Right />
				</div>
			</div>
		</div>
	)
}
