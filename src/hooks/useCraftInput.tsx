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

	const { setCraftDescription, savedType, chosenItemId } = useCraftStore()
	const { setResponseData } = useResponseStore()

	const creationParam = useCallback(() => {
		const newSearchParams = new URLSearchParams(searchParams.toString())
		const urlValue = value.trim().replace(/\s+/g, '-').toLowerCase()
		newSearchParams.set('name', urlValue)
		router.replace(`/crafting/${chosenItemId}?${newSearchParams.toString()}`)
	}, [searchParams, value, chosenItemId, router])

	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: (data: IGeminiRequest) =>
			postGeminiData<IGeminiResponse, IGeminiRequest>(
				'orchestrator/structure',
				data,
				{
					type: savedType,
				}
			),

		onSuccess: response => {
			setResponseData(response)
			creationParam()
		},

		onError: error => {
			console.error('Ошибка при генерации:', error)
		},
	})

	const handleCraft = async () => {
		setCraftDescription(value)
		if (value.trim().length <= 10)
			return toast.error('Тема слишком короткая. Минимум 10 символов.')
		else mutate({ topic: value })
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
