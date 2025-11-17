'use client'

import { useInfoPlate } from '@/hooks/useInfoPlate'
import { motion } from 'framer-motion'
import { FiRefreshCcw } from 'react-icons/fi'
export function InfoPlate() {
	const { regenerate, isPending } = useInfoPlate()

	return (
		<div className='relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 overflow-hidden'>
			<div className='absolute gradientTopBlock' />

			<div className='flex flex-col items-center text-center gap-4'>
				<h2 className='text-2xl font-semibold text-[color:var(--mainPurple)] mt-2'>
					Обратите внимание!
				</h2>

				<p className='text-base text-gray-700 leading-relaxed max-w-[250px]'>
					Вы можете поменять название темы прямо внутри файла
					<span className='block text-lg font-semibold text-blue-500 mt-1 mb-2'>
						или
					</span>
					воспользоваться перегенирацией
				</p>

				<motion.button
					whileHover={{ rotate: 180, scale: 1.1 }}
					transition={{ duration: 0.6, ease: 'easeInOut' }}
					onClick={() => {
						regenerate()
					}}
					className='gradientBg mt-2 flex items-center justify-center w-14 h-14 rounded-full  shadow-md hover:shadow-lg active:scale-95 transition'
				>
					<motion.div
						animate={isPending ? { rotate: 360 } : { rotate: 0 }}
						transition={
							isPending
								? {
										repeat: Infinity,
										duration: 2.5,
										ease: 'linear',
								  }
								: {}
						}
					>
						<FiRefreshCcw size={28} className='text-white' />
					</motion.div>
				</motion.button>
			</div>
		</div>
	)
}
