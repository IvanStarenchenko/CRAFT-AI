import Mail from '@/assets/Contacts/email.png'
import Phone from '@/assets/Contacts/phone.png'
import Social from '@/assets/Contacts/social.png'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'

import type { IContactItem, IContacts } from '../types/contacts.interface'

const telegram = <FaTelegram size={24} fill='#78258D' />
const facebook = <FaFacebook size={24} fill='#78258D' />
const youtube = <FaYoutube size={24} fill='#78258D' />

export const CONTACTS: IContacts[] = [
	{
		number: '+7 (495) 156-35-50',
		gmail: ['info@craft.com', 'support@language2go.ru'],
		socials: [
			{
				icon: telegram,
				link: 'https://t.me/craft_support',
			},
			{
				icon: facebook,
				link: 'https://t.me/craft_support',
			},
			{
				icon: youtube,
				link: 'https://t.me/craft_support',
			},
		],
	},
]

export const CONTACT_ITEM: IContactItem[] = [
	{
		image: Phone,
		title: 'По телефону',
		type: 'phone',
		data: CONTACTS[0].number,
	},
	{
		image: Mail,
		title: 'По электронке',
		type: 'email',
		data: CONTACTS[0].gmail,
	},
	{
		image: Social,
		title: 'В соц. сетях',
		type: 'social',
		data: CONTACTS[0].socials,
	},
]
