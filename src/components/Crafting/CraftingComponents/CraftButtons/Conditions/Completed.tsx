import type { IFilesLinks } from '@/shared/types/api.interface'
import { useResponseStore } from '@/store/gemini.store'
import { handleDownload } from '@/utils/fileDownloader'
import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'
interface IProps {
	links: Pick<IFilesLinks, 'docxFileName' | 'pdfFileName'>
}

export function Completed({ links }: IProps) {
	const buttons = [
		{ title: 'DOCX', action: 'docx', icon: <FiFileText size={20} /> },
		{ title: 'PDF', action: 'pdf', icon: <FiDownload size={20} /> },
	]

	const responseData = useResponseStore(state => state.responseData)
	if (!responseData) return null

	return (
		<div className='flex flex-col items-center gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm'>
			<h3 className='text-lg font-semibold text-gray-800 mb-2'>
				Файл готов к загрузке:
			</h3>

			<div className='flex gap-4'>
				{buttons.map(btn => (
					<motion.button
						key={btn.title}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.97 }}
						onClick={() =>
							handleDownload(links, btn.action, responseData.title)
						}
						className='flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition'
					>
						{btn.icon}
						{btn.title}
					</motion.button>
				))}
			</div>
		</div>
	)
}
