'use client'
import { useUserStore } from '@/store/user.store'
import { useEffect } from 'react'
import { FaPen } from 'react-icons/fa'
import { SiAdguard } from 'react-icons/si'

interface IUserEditProps {
	edit: boolean
	toggleEdit: (edit: boolean) => void
	onCancel?: () => void
}
export function UserTop({ edit, toggleEdit, onCancel }: IUserEditProps) {
	const { user } = useUserStore()
	useEffect(() => {
		const edditKeyHandler = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && edit) {
				toggleEdit(false)
			}
		}
		window.addEventListener('keydown', edditKeyHandler)
		return () => window.removeEventListener('keydown', edditKeyHandler)
	}, [edit, toggleEdit])

	let guard
	if (user && user?.authProvider === 'LOCAL') {
		if (user?.twoFactorEnabled) {
			guard = (
				<>
					{user?.twoFactorEnabled && (
						<div className='flex items-center gap-x-1 text-[16px] text-[color:var(--secondGrey)]'>
							<SiAdguard color='green' size={21} /> Two Factor On
						</div>
					)}
				</>
			)
		} else if (!user?.twoFactorEnabled) {
			guard = (
				<>
					{!user?.twoFactorEnabled && (
						<div className='flex items-center gap-x-1 text-[16px] text-[color:var(--secondGrey)]'>
							<SiAdguard color='red' size={21} /> Two Factor Off
						</div>
					)}
				</>
			)
		}
	}
	return (
		<div className='flex justify-between items-center p-[15px] '>
			<div className='flex items-center gap-x-[25px]'>
				<div className='flex items-center'>
					<div>
						<h2 className='text-[24px]'>{user?.name || 'Ivan'}</h2>
						<p className='text-[18px] text-[color:var(--secondGrey)]'>
							{user?.email || 'example@gmail.com'}
						</p>
					</div>
				</div>
				{guard}
			</div>
			{!edit ? (
				<button
					className='gradientBg px-[25px] py-[15px] text-[color:#fff] flex items-center gap-x-[10px] text-[18px] h-fit rounded-2xl'
					onClick={() => toggleEdit(true)}
				>
					Edit <FaPen size={14} />
				</button>
			) : (
				<div className='flex items-center gap-x-[20px]'>
					<button
						onClick={onCancel}
						className='gradientBg px-[25px] py-[15px] text-[color:#fff] flex items-center gap-x-[10px] text-[18px] h-fit rounded-2xl'
					>
						Cancel
					</button>
				</div>
			)}
		</div>
	)
}
