import Image from 'next/image'
import wait from '../../../../../assets/gifs/wait.gif'

export const WhileGenerating = () => {
	return (
		<div className='flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm'>
			<Image
				src={wait}
				width={60}
				height={60}
				alt='Загрузка'
				className='mb-4 opacity-80'
			/>
			<p className='text-gray-700 text-sm leading-relaxed'>
				Генерация файла может занять до{' '}
				<span className='font-semibold text-indigo-600'>20 минут</span>.
				<br />
				Пожалуйста, подождите...
			</p>
		</div>
	)
}
