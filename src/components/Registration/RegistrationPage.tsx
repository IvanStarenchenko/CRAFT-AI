'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Logo } from '../Header/headerComponents/logo'
import { MainForm } from './Components/MainForm'
import { Verification } from './Components/Verification'
export function RegistrationPage() {
	const [verifyId, setVerifyId] = useState<number | null>(null)
	const router = useRouter()
	return (
		<div className='flex flex-col  gap-y-[40px] justify-center ml-[50%] py-[36px] px-[36px] translate-x-[-50%] min-h-[560px]'>
			<Logo />
			<h2 className='main-title'>Регистрация </h2>
			<div className=' flex flex-col items-center gap-y-[20px] text-[16px] text-[#6b7280]'>
				<div className='w-[488px]'>
					{!verifyId ? (
						<MainForm setVerifyId={setVerifyId} />
					) : (
						<Verification verifyId={verifyId} />
					)}
				</div>
				<span className='flex items-center gap-x-[10px]'>
					Уже есть аккаунт?{' '}
					<button
						onClick={() => {
							router.push('/login')
						}}
						className='text-[color:var(--mainPurple)] '
					>
						{' '}
						Sign up
					</button>
				</span>
			</div>
		</div>
	)
}
