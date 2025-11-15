import { Hat } from '../Components/Hat'
import { RefLink } from './Components/RefLink'
import { RefStats } from './Components/RefStats'
export function Referral() {
	return (
		<div className='flex flex-col gap-y-[20px]'>
			<Hat
				title='Invite Friends & Earn Rewards'
				subtitle='Share your referral link and get bonuses for every friend who joins'
			/>
			<div className='w-full bg-[color:#fff] rounded-2xl p-[30px] bg-gradient-to-r from-[#F3F6FF] to-[#FBF4FD] shadow-2xl'>
				<RefLink />
			</div>

			<RefStats />
		</div>
	)
}
