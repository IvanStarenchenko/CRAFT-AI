import girl from '@/assets/image.png'
import Image from 'next/image'

export function Left() {
	return (
		<div className='flex flex-col gap-y-[60px] '>
			<div className='flex flex-col gap-y-[30px]'>
				<h3 className='main-title'>Отвечаем на частые вопросы</h3>
				<button className=' w-fit'>
					<span className='btn-main-style'>Задать вопрос</span>
				</button>
			</div>
			<Image src={girl} width={450} height={450} alt='girl' />
		</div>
	)
}
