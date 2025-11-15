import type { TGenerationType } from '@/shared/types/api.interface'
export interface ICraftItem {
	id: number
	name: string
	description: string
	icon: React.ReactNode
	path: string
	bgc?: string
	activeBg?: string
	type: TGenerationType
}

export interface ICraftItemWithChosen extends ICraftItem {
	isChosen: boolean
	onChose: (id: number | null) => void
}
