import cloud from '@/assets/cloud.assets.svg'
import Image from 'next/image'
export function Left() {
	return (
		<div className='relative flex flex-col gap-y-[27px]'>
			<Image
				src={cloud}
				alt='cloud'
				width={400}
				height={300}
				className='absolute top-[-20%] left-[0%] object-cover'
			/>
			<h2 className='main-title'>
				Кому подойдет
				<span className='block text-[#2E90D1]'>CRAFT</span>
			</h2>
			<p className='text-[20px] leading-[25px] font-[500] tracking-[1px] w-[453px]'>
				<span className='text-[#2E90D1]'>CRAFT</span> подойдет всем, кто хочет
				научиться создавать уникальные и оригинальные тексты для своих работ и
				проектов.
			</p>
			<button className='text-left mt-[20px]'>
				<span className='btn-main-style'>Попробовать</span>
			</button>
		</div>
	)
}
