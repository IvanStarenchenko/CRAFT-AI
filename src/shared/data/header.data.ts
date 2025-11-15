import { PAGES } from '@/config/pages.config'
import type { IHeader } from '@/shared/types/navigation.interface'
export const HEADER: IHeader[] = [
	{
		title: 'Крафты',
		href: PAGES.CRAFTS,
	},
	{
		title: 'Контакты',
		href: PAGES.CONTACTS,
	},
	{
		title: 'Про нас',
		href: PAGES.ABOUT,
	},
]
