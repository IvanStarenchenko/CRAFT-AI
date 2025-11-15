'use client'
import type { IEditFields } from '@/shared/types/profile.interface'
//import { useUserStore } from '@/store/user.store'
import { useUserStore } from '@/store/user.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface IUserEditProps {
	edit: boolean
	toggleEdit: (edit: boolean) => void
	onSave: (data: IEditFields) => void
}

export const schema = z.object({
	name: z.string().min(2, 'Full Name is required'),
})

export function UserForm(props: IUserEditProps) {
	const { editUser } = useUserStore()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		mode: 'onSubmit',
		defaultValues: {
			name: editUser?.name || '',
		},
	})

	useEffect(() => {
		if (editUser) reset(editUser)
	}, [editUser, reset])

	return (
		<div className='p-[40px] '>
			<div className='grid grid-cols-1 gap-x-[30px] gap-y-[30px]'>
				<form onSubmit={handleSubmit(props.onSave)}>
					<label htmlFor='name'>Full Name</label>
					<input
						id='name'
						className='input'
						{...register('name')}
						disabled={!props.edit}
						placeholder='Enter your full name'
					/>
					{errors.name && (
						<p className='text-[color:(var(--mainPurple))]'>
							{errors.name.message}
						</p>
					)}

					{props.edit && (
						<button
							type='submit'
							className='gradientBg px-[25px] py-[15px] mt-[20px] text-[color:#fff]  text-[18px] rounded-2xl'
						>
							Save
						</button>
					)}
				</form>
			</div>
		</div>
	)
}
