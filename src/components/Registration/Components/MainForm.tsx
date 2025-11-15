'use client'
import { useRegistration } from '@/hooks/useRegistration'
import { postAuthData } from '@/services/auth'
import type { IRegistration } from '@/shared/types/auth.interface'
import { useMutation } from '@tanstack/react-query'
import { twMerge } from 'tailwind-merge'

export function MainForm({
	setVerifyId,
}: {
	setVerifyId: (id: number) => void
}) {
	const { register, handleSubmit, errors, isValid, isSubmitting, FieldError } =
		useRegistration()
	const { mutate: registration, isPending } = useMutation({
		mutationFn: (data: IRegistration) =>
			postAuthData<number, IRegistration>('register', data),
		onSuccess: async res => {
			setVerifyId(res)
		},
		onError: error => {
			console.error('Ошибка при отправке:', error)
		},
	})

	const onSubmit = (data: IRegistration) => registration(data)
	return (
		<form
			className='flex flex-col gap-y-[10px]'
			onSubmit={handleSubmit(onSubmit)}
		>
			<input
				className='input'
				type='mail'
				placeholder='Email'
				{...register('contact')}
			/>
			<FieldError error={errors.contact?.message} />

			<input
				className='input'
				type='password'
				placeholder='password'
				{...register('password')}
			/>
			<FieldError error={errors.password?.message} />

			<input
				className='input'
				type='text'
				placeholder='First Name'
				{...register('firstName')}
			/>
			<FieldError error={errors.firstName?.message} />
			<input
				className='input'
				type='text'
				placeholder='Last Name'
				{...register('lastName')}
			/>

			<FieldError error={errors.lastName?.message} />

			<button
				disabled={!isValid || isSubmitting || isPending}
				className={twMerge(
					'w-fit m-auto mt-[20px]',
					!isValid || isSubmitting ? 'btn-disabled ' : 'btn-main-style '
				)}
			>
				{isPending ? 'Регистрация...' : 'Зарегистрироваться'}
			</button>
		</form>
	)
}
