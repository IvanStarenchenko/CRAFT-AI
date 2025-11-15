import { HistoryItem } from './HistoryItem'
const data = [
	{
		name: 'Document1.pdf',
		type: 'PDF',
		date: '2023-10-01',
		status: 'Completed',
	},
	{
		name: 'Image1.png',
		type: 'PNG',
		date: '2023-10-02',
		status: 'In Progress',
	},
	{
		name: 'Report.docx',
		type: 'DOCX',
		date: '2023-10-03',
		status: 'Completed',
	},
]
const titles = ['Name', 'Type', 'Date', 'Status', 'Actions']
export function HistoryBlock() {
	const gridClasses =
		'grid grid-cols-[3fr_1.5fr_2fr_1.5fr_1fr] items-center text-left py-2'

	return (
		<div className='mt-5 p-4 rounded-xl bg-white shadow-xl mx-auto w-[100%]'>
			<div className='flex flex-col'>
				<div
					className={`${gridClasses} border-b border-gray-300 mb-2 font-medium text-gray-500 uppercase text-xs`}
				>
					{titles.map((title, index) => (
						<h2
							key={index}
							className={`
                ${
									index === titles.length - 1
										? 'flex justify-end pr-4'
										: 'whitespace-nowrap'
								}
              `}
						>
							{title}
						</h2>
					))}
				</div>

				{data.map((item, index) => (
					<HistoryItem
						key={index}
						name={item.name}
						type={item.type}
						date={item.date}
						status={item.status}
					/>
				))}
			</div>
		</div>
	)
}
