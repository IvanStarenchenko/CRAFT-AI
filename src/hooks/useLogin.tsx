import { getUserData, postAuthData } from '@/services/auth'
import type { ILogin } from '@/shared/types/auth.interface'
import type { JwtAuthResponse } from '@/shared/types/JwtAuthResponse'
import type { IUser } from '@/shared/types/profile.interface'
import { useUserStore } from '@/store/user.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
export const schema = z.object({
	contact: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
})
export function useLogin() {
	const router = useRouter()

	const { setUser } = useUserStore()
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		resolver: zodResolver(schema),
		mode: 'onChange',
	})

	useEffect(() => {
		try {
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
		} catch (err) {
			console.error('Ошибка при загрузке данных пользователя:', err)
		}
	}, [])

	const { mutate: loginMutation, isPending } = useMutation<
		JwtAuthResponse,
		Error,
		ILogin
	>({
		mutationFn: (data: ILogin) => {
			return postAuthData<JwtAuthResponse, ILogin>('login', data)
		},
		onSuccess: res => {
			console.log('seccess')
		},
		onError: err => {
			console.error(err)
		},
	})
	const disabled = !isValid || isSubmitting || isPending

	const onSubmit = (data: ILogin) => {
		loginMutation(data)
	}
	return {
		register,
		handleSubmit,
		errors,
		disabled,
		onSubmit,
	}
}
