'use client'
import { useCraftStore } from '@/store/craft.store'

import { CRAFT } from '../../shared/data/craft.data'
import { CraftInput } from './CraftInput'
import CraftItem from './CraftItem'
export function Craft() {
	const chosenItemId = useCraftStore(state => state.chosenItemId)
	const setChosenItemId = useCraftStore(state => state.setChosenItemId)
	return (
		<div>
			<div className='flex flex-col gap-y-[80px] pr-[40px] pb-[40px] pt-[40px] pl-[40px]'>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[20px]'>
					{CRAFT.map(item => (
						<CraftItem
							key={item.id}
							{...item}
							isChosen={chosenItemId === item.id}
							onChose={setChosenItemId}
						/>
					))}
				</ul>

				<CraftInput />
			</div>
		</div>
	)
}
