'use client'
import { useUserStore } from '@/store/user.store'
import { useRouter } from 'next/navigation'
import { Logo } from './headerComponents/logo'
import { Menu } from './headerComponents/menu'
export function Header() {
	const { user } = useUserStore()
	const router = useRouter()

	return (
		<header className='sticky pt-[15px] top-0 z-50'>
			<div
				className='flex items-center gap-[55px] w-full px-6 py-3
			rounded-2xl border shadow-lg
			bg-white/10 border-white/20
			backdrop-blur-md backdrop-saturate-150'
			>
				<Logo />
				<Menu />
				{user?.id ? (
					<button
						onClick={() => {
							router.push(`/profile/${user.id}`)
						}}
						className='btn-main-style ml-auto'
					>
						Аккаунт
					</button>
				) : (
					<button
						onClick={() => {
							router.push('/login')
						}}
						className='btn-main-style ml-auto'
					>
						Вход
					</button>
				)}
			</div>
		</header>
	)
}
