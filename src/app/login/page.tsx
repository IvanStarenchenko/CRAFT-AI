import { LoginPage } from '@/components/Login/Login'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login - Crafting Interpreters',
}
export default function Login() {
	return (
		<main className='p-[20px]'>
			<LoginPage />
		</main>
	)
}
