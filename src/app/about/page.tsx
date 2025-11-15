import { AboutPage } from '@/components/About/About'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About - Crafting Interpreters',
}
export default function About() {
	return (
		<main className='p-[20px]'>
			<AboutPage />
		</main>
	)
}
