'use client'
import { useResponseStore } from '@/store/gemini.store'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
export function CraftPreviewResponse() {
	const { responseData, setResponseData, clearResponseData } =
		useResponseStore()
	const pathname = usePathname()
	const [devMode, setDevMode] = useState(false)
	const [title, setTitle] = useState('')
	const [newTitle, setNewTitle] = useState('')
	const chapters = responseData?.chapters || []

	useEffect(() => {
		return () => {
			if (window.location.pathname !== pathname) {
				clearResponseData()
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	useEffect(() => {
		if (responseData) {
			setTitle(responseData.title)
		}
	}, [responseData])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setDevMode(false)
				setTitle(title || '')
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [title])

	const saveTitle = useCallback(() => {
		if (!responseData) return
		setTitle(newTitle)
		setResponseData({
			...responseData,
			title,
		})
		setDevMode(false)
	}, [newTitle, title, responseData, setResponseData])
	if (!responseData) {
		return null
	}

	return (
		//font-serif
		<article className='text-base text-gray-900 leading-relaxed max-w-4xl mx-auto p-12 bg-white shadow-lg w-full'>
			<input
				value={title}
				onFocus={() => setDevMode(true)}
				onChange={e => setNewTitle(e.target.value)}
				className='text-xl font-bold text-center mb-10 border-b border-gray-300 focus:outline-none w-full'
			/>
			{devMode && (
				<div className='flex justify-center gap-4 mb-8'>
					<button
						onClick={saveTitle}
						className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'
					>
						Сохранить
					</button>
					<button
						onClick={() => {
							setDevMode(false)
							setTitle(responseData.title)
						}}
						className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition'
					>
						Отмена
					</button>
				</div>
			)}
			{chapters.length > 0 ? (
				<ul className='list-decimal pl-6 space-y-6'>
					{chapters.map((chapter, index) => (
						<li key={index}>
							<h2 className='text-lg font-semibold mb-2'>{chapter.title}</h2>

							{chapter.sections.length > 0 && (
								<ul className='list-decimal pl-6 space-y-4'>
									{chapter.sections.map((section, secIndex) => (
										<li key={secIndex}>
											<h3 className='text-base font-bold'>{section.title}</h3>
											<p className='text-justify indent-8 mt-2'>
												{section.content}
											</p>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			) : (
				<p className='italic text-gray-500 mt-4'>Разделы отсутствуют</p>
			)}
		</article>
	)
}
