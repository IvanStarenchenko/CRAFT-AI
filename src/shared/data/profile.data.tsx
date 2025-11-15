import { CiCreditCard1, CiGift, CiLogout, CiUser } from 'react-icons/ci'
import { GoHistory } from 'react-icons/go'
import type { IProfile } from '../types/profile.interface'

const user = <CiUser size={32} />
const history = <GoHistory size={32} />
const subscription = <CiCreditCard1 size={32} />
const referral = <CiGift size={32} />
const logout = <CiLogout size={32} />
export const ASIDE: IProfile[] = [
	{
		id: 1,
		icon: user,
	},
	{
		id: 2,
		icon: history,
	},
	{
		id: 3,
		icon: subscription,
	},
	{
		id: 4,
		icon: referral,
	},
	{
		id: 5,
		icon: logout,
	},
]
