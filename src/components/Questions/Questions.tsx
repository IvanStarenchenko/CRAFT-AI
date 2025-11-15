import { Left } from './QuestionsComponents/Left'
import { Right } from './QuestionsComponents/Right'
export function Questions() {
	return (
		<div className='grid grid-cols-[453px_1fr] gap-x-[27px] justify-between'>
			<Left />
			<Right />
		</div>
	)
}
