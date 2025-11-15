'use client'

import { postAuthData } from '@/services/auth'
import type { IEditFields, IUser } from '@/shared/types/profile.interface'
import { useUserStore } from '@/store/user.store'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Hat } from '../Components/Hat'
import { UserEmail } from './Components/UserEmail'
import { UserInfo } from './Components/UserInfo'
export function User() {
	const { user, setEditUser, setUser } = useUserStore()
	const [edit, setEdit] = useState(false)

	useEffect(() => {
		if (user) setEditUser({ ...user })
	}, [user])

	const { mutate: updateUser } = useMutation<IUser, Error, IUser>({
		mutationFn: (data: IUser): Promise<IUser> => {
			return postAuthData<IUser, IUser>('user', data)
		},
		onSuccess: (data: IUser) => {
			setUser(data)
			setEditUser(data)
			setEdit(false)
		},
		onError: (error: Error) => {
			console.error('Error updating user:', error)
		},
	})

	if (!user) return null

	const handleSave = (data: IEditFields) => {
		const updatedUser = { ...user, ...data }
		setEditUser(updatedUser)
		updateUser(updatedUser)
		setEdit(false)
	}

	const handleCancel = () => {
		setEditUser({ ...user })
		setEdit(false)
	}

	return (
		<>
			<Hat title={`Welcome, ${user.name}!`} />
			<UserInfo
				edit={edit}
				toggleEdit={() => setEdit(p => !p)}
				onSave={handleSave}
				onCancel={handleCancel}
			/>
			<UserEmail
				edit={edit}
				toggleEdit={() => setEdit(p => !p)}
				onSave={handleSave}
			/>
		</>
	)
}
