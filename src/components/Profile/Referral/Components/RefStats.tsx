import { GoPeople } from 'react-icons/go'
import { IoCheckmark } from 'react-icons/io5'
import { LuDollarSign } from 'react-icons/lu'
import { RefStatsItem } from './RefStatsItem'
const people = <GoPeople size={24} color='#fff' />
const check = <IoCheckmark size={24} color='#fff' />
const dollar = <LuDollarSign size={24} color='#fff' />
const stats = [
	{
		id: 1,
		icon: people,
		stat: 12,
		title: 'Total Invites',
	},
	{
		id: 2,
		icon: check,
		stat: 8,
		title: 'Successful Referrals',
	},
	{
		id: 3,
		icon: dollar,
		stat: '$160',
		title: 'Total Earned',
	},
]

export function RefStats() {
	return (
		<div className='grid  grid-cols-[repeat(3,_minmax(389px,_400px))] gap-x-[20px] justify-between items-center'>
			{stats.map(item => (
				<RefStatsItem
					key={item.id}
					icon={item.icon}
					stat={item.stat}
					title={item.title}
				/>
			))}
		</div>
	)
}
