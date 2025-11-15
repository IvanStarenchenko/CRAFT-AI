import type { IEditFields, IUser } from '@/shared/types/profile.interface'
import { create } from 'zustand'

interface IProps {
	user: IUser | null
	setUser: (user: IUser) => void
	editUser: IEditFields
	setEditUser: (editUser: IEditFields) => void
}

export const useUserStore = create<IProps>(set => ({
	user: null,
	setUser: (user: IUser) => set(() => ({ user })),
	editUser: {},
	setEditUser: (editUser: IEditFields) => set(() => ({ editUser })),
}))
