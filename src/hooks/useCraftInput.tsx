import { postGeminiData } from '@/services/gemini'
import type {
	IGeminiRequest,
	IGeminiResponse,
} from '@/shared/types/api.interface'
import { useCraftStore } from '@/store/craft.store'
import { useResponseStore } from '@/store/gemini.store'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

export function useCraftInput() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [value, setValue] = useState('')

	const { setCraftDescription, savedType } = useCraftStore()
	const { setResponseData } = useResponseStore()

	const creationParam = useCallback(
		(id: string) => {
			const newSearchParams = new URLSearchParams(searchParams.toString())
			const urlValue = value.trim().replace(/\s+/g, '-').toLowerCase()
			newSearchParams.set('name', urlValue)
			router.replace(`/crafting/${id}?${newSearchParams.toString()}`)
		},
		[searchParams, value, router]
	)
	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: (data: IGeminiRequest) =>
			postGeminiData<IGeminiResponse, IGeminiRequest>(
				'documents/structure/generate',
				data,
				{
					type: savedType,
				}
			),

		onSuccess: response => {
			setResponseData(response)
			creationParam(response.documentId || 'верни айди сука')
		},

		onError: error => {
			console.error('Ошибка при генерации:', error)
		},
	})

	const handleCraft = () => {
		setCraftDescription(value)
		if (value.trim().length <= 8)
			return toast.error('Тема слишком короткая. Минимум 8 символов.')
		else if (value.trim().length > 120)
			return toast.error('Тема слишком длинная. Максимум 120 символов.')
		else if (savedType === undefined) {
			return toast.error('Тип документа не выбран.')
		} else {
			mutate({ topic: value })
		}
	}

	return {
		value,
		setValue,
		isPending,
		isError,
		error,
		handleCraft,
	}
}
