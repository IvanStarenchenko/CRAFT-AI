import { motion } from 'framer-motion'
import { FiAlertCircle, FiRefreshCcw } from 'react-icons/fi'
interface IProps {
	handleRecover: () => void
}
export const Recovering = ({ handleRecover }: IProps) => {
	return (
		<div className='flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm'>
			<FiAlertCircle className='text-red-500 mb-3' size={32} />
			<p className='text-gray-700 mb-4'>
				Файл сгенерировался частично. Закончить генерацию:
			</p>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={handleRecover}
				className='flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition'
			>
				<FiRefreshCcw /> Попробовать снова
			</motion.button>
		</div>
	)
}
