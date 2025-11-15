'use client'
import { CRAFT } from '@/shared/data/craft.data'
import { useCraftStore } from '@/store/craft.store'
export function About() {
	const chosenItemId = useCraftStore(state => state.chosenItemId)

	const name = chosenItemId ? CRAFT[chosenItemId - 1].name : ''
	const description = chosenItemId ? CRAFT[chosenItemId - 1].description : ''
	const bgc = chosenItemId ? CRAFT[chosenItemId - 1].bgc : ''

	return (
		<div className='px-[20px] py-[20px]'>
			{chosenItemId !== null && (
				<div className='flex items-center gap-x-[15px]'>
					<div
						className='crafting-list'
						style={{
							backgroundColor: bgc,
						}}
					>
						{name}
					</div>
					<div
						className='crafting-list'
						style={{
							backgroundColor: bgc,
						}}
					>
						{description}
					</div>
				</div>
			)}
		</div>
	)
}
{
	/* <ul
className='p-[15px] ml-auto rounded-[8px] flex flex-col gap-y-[10px] text-[18px] font-[500] max-w-fit'
style={{
	backgroundColor: bgc,
}}
>
<li>
	Название крафта: <span className='crafting-list'>{name}</span>
</li>
<li>
	Количество страниц:{' '}
	<span className='crafting-list'>{description}</span>
</li>
</ul> */
}
