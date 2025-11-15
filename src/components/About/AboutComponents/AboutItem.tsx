import type { IAbout } from '@/shared/types/about.interface'
import Image from 'next/image'
export function AboutItem({ title, description, image }: IAbout) {
	return (
		<div
			className='flex justify-around items-center gap-x-[40px] h-[520px]'
			style={
				title.includes('Language2GO')
					? { display: 'flex', flexDirection: 'row-reverse' }
					: { display: 'flex', flexDirection: 'row' }
			}
		>
			<div className='flex flex-col gap-y-[24px] w-[700px]'>
				<h2 className='about-title'>{title}</h2>
				<p className='about-subtitle'>{description}</p>
			</div>
			<Image src={image} alt='aboutImg' width={430} height={325} />
		</div>
	)
}
