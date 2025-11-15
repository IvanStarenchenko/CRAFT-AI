'use client'
import { useLogin } from '@/hooks/useLogin'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Logo } from '../Header/headerComponents/logo'

export function LoginPage() {
	const { register, handleSubmit, onSubmit, errors, disabled } = useLogin()
	return (
		<div className='flex flex-col gap-y-[40px] w-[488px] justify-center ml-[50%] py-[36px] px-[36px] translate-x-[-50%] h-[560px]'>
			<Logo />
			<h2 className='main-title'>Вход в кабинет </h2>
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
				<p className='text-[color:var(--mainPurple)]'>
					{errors.contact?.message}
				</p>
				<input
					className='input'
					type='password'
					placeholder='password'
					{...register('password')}
				/>
				<p className='text-[color:var(--mainPurple)]'>
					{errors.password?.message}
				</p>
				<button
					disabled={disabled}
					className={twMerge(
						'w-fit m-auto mt-[20px]',
						disabled ? 'btn-disabled ' : 'btn-main-style '
					)}
				>
					Войти
				</button>
			</form>
			<p className='text-[16px] text-[#6b7280]'>
				Нет аккаунта?{' '}
				<Link href='/registration' className='text-[color:var(--cyan)]'>
					Зарегистрируйтесь
				</Link>
			</p>
		</div>
	)
}
