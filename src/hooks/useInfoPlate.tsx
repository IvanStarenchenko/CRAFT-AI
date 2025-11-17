import { postGeminiData } from '@/services/gemini'
import type {
	IGeminiRequest,
	IGeminiResponse,
} from '@/shared/types/api.interface'
import { useCraftStore } from '@/store/craft.store'
import { useResponseStore } from '@/store/gemini.store'
import { useMutation } from '@tanstack/react-query'

export function useInfoPlate() {
	const { craftDescription } = useCraftStore()
	const { setResponseData } = useResponseStore()

	const { mutate, isPending } = useMutation({
		mutationFn: (data: IGeminiRequest) =>
			postGeminiData<IGeminiResponse, IGeminiRequest>(
				'orchestrator/structure',
				data
			),

		onSuccess: response => {
			setResponseData(response)
		},

		onError: error => {
			console.error('Ошибка при генерации:', error)
		},
	})

	function regenerate() {
		if (!isPending) {
			setResponseData(null)
			mutate({ topic: craftDescription })
		}
	}
	return {
		regenerate,
		isPending,
	}
}
