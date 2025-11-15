import type { IWhoItem } from '@/shared/types/whoItem.interface'
export function WhoItem({ icon, name, description }: IWhoItem) {
	return (
		<div className='flex flex-col gap-y-[15px] max-w-fit pt-[20px] pb-[20px] pr-[40px] pl-[40px]'>
			<span className='pt-[8px] pb-[8px] pl-[8px] pr-[8px] bg-white rounded-full w-fit'>
				{icon}
			</span>
			<h3 className='font-[700] text-[24px] leading-[32px]'>{name}</h3>
			<p className='font-[500] text-[16px] leading-[24px] text-[#585858]'>
				{description}
			</p>
		</div>
	)
}
