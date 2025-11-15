import { WHO_DATA } from '@/shared/data/who.data'
import { WhoItem } from './WhoItem'
export function Right() {
	return (
		<div className='grid grid-cols-2 gap-[20px] w-[65%]'>
			{WHO_DATA.map(item => (
				<WhoItem
					key={item.name}
					icon={item.icon}
					name={item.name}
					description={item.description}
				/>
			))}
		</div>
	)
}
