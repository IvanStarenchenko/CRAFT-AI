'use client'
// import { useCraftStore } from '@/store/craft.store'
import { useResponseStore } from '@/store/gemini.store'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Skeleton } from '../Skeleton/Skeleton'
import { About } from './CraftingComponents/About'
import { CraftButtons } from './CraftingComponents/CraftButtons/CraftButtons'
import { CraftPreviewResponse } from './CraftingComponents/CraftPreview'
import { InfoPlate } from './CraftingComponents/InfoPlate'
export function Crafting() {
	const pathname = usePathname()
	const parts = pathname.split('/')
	const formattedPathname = parts[parts.length - 2] || 'crafting'
	const [isPending, setIsPending] = useState<boolean>(false)
	const responseData = useResponseStore(state => state.responseData)

	useEffect(() => {
		if (responseData === null) {
			setIsPending(true)
		} else {
			setIsPending(false)
		}
	}, [responseData])

	return (
		<div>
			<Breadcrumbs>{formattedPathname}</Breadcrumbs>
			<div className='flex flex-col'>
				<div className='flex items-center'>
					<About />
				</div>
				<div className='flex flex-col gap-y-12 w-full'>
					{isPending ? (
						<div className='w-full h-full'>
							<Skeleton count={5} />
						</div>
					) : (
						<div className='grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8 items-start min-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 py-10'>
							<div className='w-full'>
								<CraftPreviewResponse />
							</div>

							<div className='flex flex-col gap-8 xl:sticky xl:top-[120px]'>
								<InfoPlate />

								<div className='gradientFullBlock'>
									<CraftButtons />
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
