'use client'
import type { IChosenCraftItem } from '@/shared/types/craftItem.interface'
import { memo } from 'react'
import { useCraftStore } from '../../store/craft.store'
function CraftItem({
	id,
	name,
	description,
	icon,
	type,
	isChosen,
	bgc,
	activeBg,
	onChose,
}: IChosenCraftItem) {
	const toggleType = useCraftStore(state => state.toggleType)

	return (
		<button
			style={{
				backgroundColor: bgc,
				border: '3px solid transparent',
				transition: 'all 0.3s ease',
				borderColor: isChosen ? '#e3e3e3' : 'transparent',
				boxShadow: isChosen ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
				transform: isChosen ? 'scale(110%)' : 'none',
			}}
			onClick={() => {
				onChose(isChosen ? null : id)
				toggleType(isChosen ? undefined : type)
			}}
			className='flex items-center text-left w-full gap-x-[20px] pr-[20px] pb-[20px] pt-[20px] pl-[20px] border-1 rounded-[8px]'
		>
			{icon && (
				<span
					className='flex items-center justify-center w-[60px] h-[60px] bg-white rounded-xl transition-all'
					style={{
						borderWidth: isChosen ? '2px' : '0px',
						borderStyle: 'solid',
						borderColor: isChosen ? activeBg : 'transparent',
					}}
				>
					{icon}
				</span>
			)}
			<div className='flex flex-col gap-y-[5px]'>
				{name && <h3 className='font-[500] text-[18px] '>{name}</h3>}
				{description && (
					<p className='font-[400] text-[16px] text-[#808080]'>{description}</p>
				)}
			</div>
		</button>
	)
}

export default memo(CraftItem)
