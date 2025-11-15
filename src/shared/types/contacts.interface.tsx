import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export interface ISocial {
	icon: ReactNode
	link: string
}

export interface IContacts {
	number: string
	gmail: string[]
	socials: ISocial[]
}
export interface IContactItem {
	image: string | StaticImageData
	title: string
	type: 'phone' | 'email' | 'social'
	data: string | string[] | ISocial[]
}
