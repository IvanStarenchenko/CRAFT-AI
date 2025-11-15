import { Crafting as CraftingPage } from '@/components/Crafting/Crafting'
import type { Metadata } from 'next'

type Params = { id: string }
// 1) ИСПОЛЬЗУЙ ДИНАМИЧЕСКИЙ SEO
// 2) ЕСЛИ БУДЕТ ОШИБКА ПРО НЕСОВПАДЕНИЕ НА СЕРВЕРЕ И КЛИЕНТЕ, ТО ОБЕРНИ В 'use client' ИМПОРТ + ИСПОЛЬЗУЙ DYNAMIC ИМПОРТ ()

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>
}): Promise<Metadata> {
	const { id } = await params
	return {
		title: `Crafting - ${id} - Crafting Interpreters`,
	}
}

export default function Crafting() {
	return (
		<main className='p-[20px]'>
			<CraftingPage />
		</main>
	)
}
