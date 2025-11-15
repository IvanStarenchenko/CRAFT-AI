'use client'
import { Skeleton } from '@/components/Skeleton/Skeleton'
import { getUserData } from '@/services/auth'
import type { IUser } from '@/shared/types/profile.interface'
import { useProfilesStore } from '@/store/profile.store'
import { useUserStore } from '@/store/user.store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Aside } from './Components/Aside'
import { History } from './History/History'
import { Referral } from './Referral/Referral'
import { Subs } from './Subs/Subs'
import { User } from './User/User'
export function ProfilePage() {
	const { chosenItem } = useProfilesStore()

	const router = useRouter()

	const { user, setUser, setEditUser } = useUserStore()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getUserData<IUser[]>('user')

				setUser(data[0])
				if (data[0]?.id) {
					router.push(`/profile/${data[0].id}`)
				}
			} catch (err) {
				console.error('Ошибка при загрузке данных пользователя:', err)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		if (user) setEditUser({ ...user })
	}, [user])

	if (!user)
		return (
			<div className='m-21'>
				<Skeleton count={5} />
			</div>
		)

	return (
		<div className='flex gap-x-[100px] py-[75px] '>
			<Aside />
			<div className='w-[100%]'>
				{chosenItem === 1 && <User />}
				{chosenItem === 2 && <History />}
				{chosenItem === 3 && <Subs />}
				{chosenItem === 4 && <Referral />}
			</div>
		</div>
	)
}
