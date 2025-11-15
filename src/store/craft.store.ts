import type { TGenerationType } from '@/shared/types/api.interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface IProps {
	savedType: TGenerationType | undefined
	toggleType: (type: TGenerationType | undefined) => void

	craftDescription: string
	setCraftDescription: (description: string) => void

	chosenItemId: number | null
	setChosenItemId: (id: number | null) => void
}

export const useCraftStore = create<IProps>()(
	persist(
		set => ({
			savedType: undefined,
			toggleType: (savedType: TGenerationType | undefined) =>
				set(() => ({ savedType })),

			craftDescription: '',
			setCraftDescription: (description: string) =>
				set(() => ({ craftDescription: description })),

			chosenItemId: null,
			setChosenItemId: (id: number | null) => set(() => ({ chosenItemId: id })),
		}),
		{
			name: 'craft-storage',
			partialize: state => ({
				chosenItemId: state.chosenItemId,
				craftDescription: state.craftDescription,
			}),
		}
	)
)
