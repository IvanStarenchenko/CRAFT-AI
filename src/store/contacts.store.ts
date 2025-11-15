import { create } from 'zustand'

interface IProps {
	savedType: string
	toggleType: (type: string) => void
}
export const useContactsStore = create<IProps>(set => ({
	savedType: 'phone',
	toggleType: (savedType: string) => set(() => ({ savedType })),
}))
