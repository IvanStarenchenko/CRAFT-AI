import { ContactUs } from '@/components/ContactUs/ContactUs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ContactUs - Crafting Interpreters',
}
export default function Contacts() {
	return (
		<main className='p-[20px]'>
			<ContactUs />
		</main>
	)
}
