import { PLANS } from '@/shared/data/subsPlans.data'
import { Hat } from '../Components/Hat'
import { SubsPlan } from './Components/SubsPlan'

export function Subs() {
	return (
		<div className='flex flex-col items-center gap-10 '>
			<Hat
				title='Choose Your Plan'
				subtitle='Select the perfect plan for your needs'
			/>
			<div className='flex justify-around gap-2 w-full'>
				{PLANS.map(plan => (
					<SubsPlan key={plan.title} {...plan} />
				))}
			</div>
		</div>
	)
}
