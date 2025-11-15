import { Left } from './WhoComponents/Left'
import { Right } from './WhoComponents/Right'
export function Who() {
	return (
		<div className='flex gap-x-[30px] justify-between'>
			<Left />
			<Right />
		</div>
	)
}
