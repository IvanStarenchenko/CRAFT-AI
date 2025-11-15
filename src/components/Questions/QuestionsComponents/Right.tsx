import { AccordionItem } from '@/components/Accordion/Accordion'
import { QUESTIONS_DATA } from '@/shared/data/question.data'
export function Right() {
	return (
		<div className='flex flex-col  gap-y-6'>
			{QUESTIONS_DATA.map(item => (
				<AccordionItem key={item.name} name={item.name} answer={item.answer} />
			))}
		</div>
	)
}
