import { ProfilePage } from '@/components/Profile/Profile'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Profile',
}

export default function Profile() {
	return (
		<main>
			<ProfilePage />
		</main>
	)
}
