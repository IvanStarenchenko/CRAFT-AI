'use client'

import { postGeminiData } from '@/services/gemini'
import type {
	IGeminiRequest,
	IGeminiResponse,
} from '@/shared/types/api.interface'
import { useCraftStore } from '@/store/craft.store'
import { useResponseStore } from '@/store/gemini.store'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { FiRefreshCcw } from 'react-icons/fi'
export function InfoPlate() {
	const { craftDescription } = useCraftStore()
	const { setResponseData } = useResponseStore()

	const { mutate, isPending } = useMutation({
		mutationFn: (data: IGeminiRequest) =>
			postGeminiData<IGeminiResponse, IGeminiRequest>(
				'orchestrator/structure',
				data
			),

		onSuccess: response => {
			setResponseData(response)
		},

		onError: error => {
			console.error('Ошибка при генерации:', error)
		},
	})

	function regenerate() {
		if (!isPending) {
			setResponseData(null)
			mutate({ topic: craftDescription })
		}
	}

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
					onClick={() => {}}
					className='gradientBg mt-2 flex items-center justify-center w-14 h-14 rounded-full  shadow-md hover:shadow-lg active:scale-95 transition'
				>
					<FiRefreshCcw
						size={28}
						onClick={() => {
							regenerate()
						}}
						className='text-white'
					/>
				</motion.button>
			</div>
		</div>
	)
}
