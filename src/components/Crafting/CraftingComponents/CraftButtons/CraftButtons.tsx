'use client'

import { useCraftGeneration } from '@/hooks/useCraftGeneration'
import { motion } from 'framer-motion'
import { FiFileText } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import { Completed } from './Conditions/Completed'
import { Recovering } from './Conditions/Recovering'
import { WhileGenerating } from './Conditions/WhileGenering'
export function CraftButtons() {
	const { uiState, fileId, links, handleSend, handleRecover, isSending } =
		useCraftGeneration()

	const { isGenerationWaiting, isRecoverable, completedStatus } = uiState

	if (isRecoverable) return <WhileGenerating />

	if (isGenerationWaiting) return <Recovering handleRecover={handleRecover} />

	if (completedStatus && fileId) return <Completed links={links} />

	return (
		<div className='flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm'>
			<h3 className='text-lg font-semibold text-gray-800 mb-4'>
				Сгенерировать итоговый документ
			</h3>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={handleSend}
				className={twMerge(
					'gradientBg flex items-center gap-2 px-6 py-3  text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition',
					isSending && 'btn-disabled'
				)}
			>
				<FiFileText size={22} /> Сгенерировать
			</motion.button>
		</div>
	)
}
