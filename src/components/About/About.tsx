'use client'
import { ABOUT_ITEMS } from '@/shared/data/about.data'
import { usePathname } from 'next/navigation'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { AboutItem } from './AboutComponents/AboutItem'
export function AboutPage() {
	const pathname = usePathname()
	const formattedPathname = pathname.replace('/', '')

	return (
		<div className='flex flex-col gap-y-[10px]'>
			<Breadcrumbs>{formattedPathname}</Breadcrumbs>
			<h1 className='main-title'>About Page</h1>
			<p className='main-subtitle'>Говори легко - живи свободно!</p>
			<div className='flex flex-col gap-y-[10px] mt-[40px]'>
				{ABOUT_ITEMS.map((item, index) => (
					<AboutItem
						key={index}
						title={item.title}
						description={item.description}
						image={item.image}
					/>
				))}
			</div>
		</div>
	)
}
