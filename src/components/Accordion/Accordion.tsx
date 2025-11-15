import type { IAccordionProps } from '@/shared/types/accordion.interface'
import * as Accordion from '@radix-ui/react-accordion'

export function AccordionItem({ name, answer }: IAccordionProps) {
	return (
		<Accordion.Root type='single' collapsible className='w-full'>
			<Accordion.Item
				value='item-1'
				className='rounded-[10px] shadow-2xl transition-colors duration-300 data-[state=open]:bg-[#EFEFFF] data-[state=closed]:bg-white'
			>
				<Accordion.Header>
					<Accordion.Trigger className='group flex w-full items-center justify-between px-6 py-4 text-[22px] font-[500] text-left'>
						{name}
						<span
							className='transition-all duration-300 
               rounded-md 
							 text-[36px] font-light bg-transparent 
               group-data-[state=open]:rotate-45 
							 group-data-[state=open]:text-[#78258D]'
						>
							+
						</span>
					</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content
					className='px-6 pb-4 text-gray-600 text-[16px] leading-[24px] tracking-[2%] overflow-hidden
				data-[state=open]:animate-slideDown
				data-[state=closed]:animate-slideUp
				'
				>
					{answer}
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
}
