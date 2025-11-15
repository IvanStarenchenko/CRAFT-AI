'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
export const schema = z.object({
	firstName: z.string().min(4, 'First name is required'),
	lastName: z.string().min(4, 'Last name is required'),
	contact: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export function FieldError({ error }: { error?: string }) {
	if (!error) return null
	return <p className='text-[color:var(--mainPurple)]'>{error}</p>
}

export function useRegistration() {
	type TRegistrationSchema = z.infer<typeof schema>

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<TRegistrationSchema>({
		resolver: zodResolver(schema),
		mode: 'onChange',
	})

	return {
		register,
		handleSubmit,
		errors,
		isValid,
		isSubmitting,
		FieldError,
	}
}
