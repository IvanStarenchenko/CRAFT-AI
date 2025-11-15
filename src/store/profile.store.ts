import { create } from 'zustand'

interface IProps {
	chosenItem: number
	toggleItem: (type: number) => void
}
export const useProfilesStore = create<IProps>(set => ({
	chosenItem: 1,
	toggleItem: (chosenItem: number) => set(() => ({ chosenItem })),
}))
