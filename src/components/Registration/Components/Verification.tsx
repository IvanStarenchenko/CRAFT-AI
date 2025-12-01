'use client'
import { useVerification } from '@/hooks/useVerification'
import { getUserData, postAuthData } from '@/services/auth'
import type { JwtAuthResponse } from '@/shared/types/AuthSuccessResponse'
import type { IUser } from '@/shared/types/profile.interface'
import { useUserStore } from '@/store/user.store'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
export function Verification({ verifyId }: { verifyId: number }) {
	const {
		inputRefs,
		code,
		verifyCode,
		isCodeComplete,
		handleChange,
		handleKeyDown,
	} = useVerification()

	const { setUser } = useUserStore()
	const router = useRouter()

	const { mutate: verify, isPending } = useMutation<
		JwtAuthResponse,
		Error,
		string
	>({
		mutationFn: (verifyCode: string) =>
			postAuthData(`two-factor/verify/${verifyId}`, {}, { code: verifyCode }),

		onSuccess: async () => {
			const userData = await getUserData<IUser[]>('user')
			const user = userData[0]

			if (user) {
				setUser(user)
				router.push(`/profile/${user.id}`)
			}
		},

		onError: error => {
			console.error('Ошибка при отправке кода:', error)
		},
	})

	return (
		<div className='w-full text-center'>
			<h1 className='text-xl font-semibold mb-4'>Enter verification code</h1>
			<p className='text-sm text-gray-500 mb-6'>We sent a 6-digit code</p>

			<div className='flex justify-center gap-3'>
				{code.map((value, i) => (
					<input
						key={i}
						ref={el => {
							inputRefs.current[0] = el
						}}
						type='text'
						inputMode='numeric'
						maxLength={1}
						value={value}
						onChange={e => handleChange(i, e)}
						onKeyDown={e => handleKeyDown(i, e)}
						onPaste={e => e.preventDefault()}
						className='w-12 h-14 text-center text-xl border rounded-md'
					/>
				))}
			</div>

			<button
				disabled={!isCodeComplete || isPending}
				onClick={() => verify(verifyCode)}
				className='mt-8 w-full py-2 rounded-md bg-black text-white disabled:opacity-40'
			>
				{isPending ? 'Verifying...' : 'Verify'}
			</button>
		</div>
	)
}
