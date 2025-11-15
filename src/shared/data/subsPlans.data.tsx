import type { ISubsPlans } from '../types/subsPlans.interface'
export const PLANS: ISubsPlans[] = [
	{
		title: 'Free',
		price: '$0',
		period: 'forever',
		buttonText: 'Current Plan',
		features: [
			'5 generations per month',
			'Basic templates',
			'Standard quality output',
			'Email support',
			'Community access',
		],
		isCurrent: true,

		accentColor: 'from-purple-400 to-purple-500',
	},
	{
		title: 'Pro',
		price: '$19',
		period: 'per month',
		buttonText: 'Subscribe',
		features: [
			'100 generations per month',
			'Premium templates',
			'High quality output',
			'Priority email support',
			'Advanced customization',
			'API access',
			'Team collaboration',
		],
		isPopular: true,
		accentColor: 'from-indigo-500 to-purple-500',
	},
	{
		title: 'Premium',
		price: '$49',
		period: 'per month',
		buttonText: 'Subscribe',
		features: [
			'Unlimited generations',
			'All premium templates',
			'Ultra high quality output',
			'24/7 priority support',
			'Full customization',
			'Advanced API access',
			'Unlimited team members',
			'White-label options',
			'Dedicated account manager',
		],
		accentColor: 'from-gray-900 to-gray-700',
	},
]
