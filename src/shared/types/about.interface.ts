import type { StaticImageData } from 'next/image'
export interface IAbout {
	title: string
	description: string
	image: string | StaticImageData
}
