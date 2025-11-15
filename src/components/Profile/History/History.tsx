import { Hat } from '../Components/Hat'
import { HistoryBlock } from './Components/HistoryBlock'
export function History() {
	return (
		<div className='flex flex-col'>
			<Hat
				title='History of Generations'
				subtitle='View and manage your generated documents'
			/>
			<HistoryBlock />
		</div>
	)
}
