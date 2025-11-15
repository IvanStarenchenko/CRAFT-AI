import { Hero } from '@/components/Hero/hero'
import { Questions } from '@/components/Questions/Questions'
import { Who } from '@/components/Who/Who'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home - Crafting Interpreters',
}

export default function Home() {
	return (
		<main className='flex flex-col gap-y-[100px] '>
			<Hero />
			<Who />
			<Questions />
		</main>
	)
}
