import type { IEditFields } from '@/shared/types/profile.interface'
import { useUserStore } from '@/store/user.store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

interface IUserEmailProps {
	edit: boolean
	toggleEdit: (edit: boolean) => void
	onSave: (data: IEditFields) => void
}
const schema = z.object({
	email: z
		.string()
		.email('Invalid email address')
		.refine(val => val.includes('@'), {
			message: 'Email must contain @ symbol',
		}),
})
export function UserEmail(props: IUserEmailProps) {
	const { user, editUser } = useUserStore()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		mode: 'onSubmit',
		defaultValues: {
			email: editUser?.email || '',
		},
	})

	useEffect(() => {
		if (editUser) reset(editUser)
	}, [editUser, reset])

	if (user?.email) {
		return (
			<div className='mt-[20px] p-[20px] rounded-2xl bg-[color:#fff] shadow-2xl'>
				<div className='flex items-center justify-between mb-[15px]'>
					<h3 className='text-[21px] font-[600] '>Email Address</h3>
					{/* letter-spacing =  tracking */}
					<button className='gradientBg text-[#fff] tracking-[1.5px] px-[10px] py-[15px] rounded-2xl'>
						Верифицировать
					</button>
				</div>
				<form onSubmit={handleSubmit(props.onSave)}>
					<input
						type='email'
						{...register('email')}
						className='input'
						disabled={!props.edit}
						placeholder='Enter your email address'
					/>
					{errors.email && (
						<p className='text-[color:(var(--mainPurple))]'>
							{errors.email.message}
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
		)
	}
	if (user?.phoneNumber) {
		return (
			<div className='mt-[20px] p-[20px] rounded-2xl bg-[color:#fff] shadow-2xl'>
				<div className='flex items-center justify-between mb-[15px]'>
					<h3 className='text-[21px] font-[600] '>Phone Number</h3>
					{/* letter-spacing =  tracking */}
					<button className='gradientBg text-[#fff] tracking-[1.5px] px-[10px] py-[15px] rounded-2xl'>
						Верифицировать
					</button>
				</div>
				<div>
					<input type='phone' value={user?.phoneNumber} className='input' />
				</div>
			</div>
		)
	}
}
