import { GoDownload } from 'react-icons/go'
import { IoEyeOutline } from 'react-icons/io5'

interface HistoryItemProps {
	name: string
	type: string
	date: string
	status: string
}
export function HistoryItem({ name, type, date, status }: HistoryItemProps) {
	const download = <GoDownload size={21} color='#3b76f6' />
	const view = <IoEyeOutline size={21} color='#3bd877' />

	const statusClasses =
		status === 'Completed'
			? 'bg-green-100 text-green-700'
			: 'bg-yellow-100 text-yellow-700'

	const gridClasses =
		'grid grid-cols-[3fr_1.5fr_2fr_1.5fr_1fr] items-center border-b border-gray-200 py-3 text-sm min-h-[50px]'

	return (
		<div className={gridClasses}>
			<h3 className='text-gray-900 font-medium whitespace-nowrap overflow-hidden text-ellipsis'>
				{name}
			</h3>

			<span className='text-gray-500 whitespace-nowrap'>{type}</span>
			<span className='text-gray-500 text-xs whitespace-nowrap'>
				<span className='mr-1'>🗓️</span>
				{date}
			</span>

			<div className='flex justify-start'>
				<span
					className={`px-3 py-1 rounded-full font-semibold text-xs ${statusClasses}`}
				>
					{status}
				</span>
			</div>

			<div className='flex items-center gap-x-3 justify-end pr-4'>
				{status === 'Completed' ? (
					<>
						<button>{view}</button>
						<button>{download}</button>
					</>
				) : (
					<button>{view}</button>
				)}
			</div>
		</div>
	)
}
