import { RegistrationPage } from '@/components/Registration/RegistrationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Registration - Crafting Interpreters',
}
export default function Registration() {
	return (
		<main className='p-[20px]'>
			<RegistrationPage />
		</main>
	)
}
