import { RESPONSE_STATUS, STATUS_GROUPS } from '@/constants/Statuses'
import { getApiResponse, postGeminiData } from '@/services/gemini'
import type {
	IFilesLinks,
	IGeminiResponse,
	IStatus,
	TGenerationType,
} from '@/shared/types/api.interface'
import { useCraftStore } from '@/store/craft.store'
import { useResponseStore } from '@/store/gemini.store'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
export function useCraftGeneration() {
	const responseData = useResponseStore(state => state.responseData)
	const savedType = useCraftStore()
	const [statusText, setStatusText] = useState<Omit<IStatus, 'id'> | null>(null)
	const [fileId, setFileId] = useState<string>('')
	const [links, setLinks] = useState<Omit<IFilesLinks, 'id'>>({
		docxFileName: '',
		pdfFileName: '',
	})
	const status = statusText?.status

	const isRecoverable = STATUS_GROUPS.RECOVERABLE.includes(
		status as (typeof STATUS_GROUPS.RECOVERABLE)[number]
	)

	const isCompleted = status === STATUS_GROUPS.DONE[0]

	const isGenerationWaiting =
		status != null &&
		!isCompleted &&
		isRecoverable &&
		RESPONSE_STATUS.GENERATING_STRUCTURE

	const sendMutation = useMutation({
		mutationFn: (data: IGeminiResponse) =>
			postGeminiData<string, IGeminiResponse>(
				'documents/generate/with-plan',
				data,
				{ type: savedType.savedType as TGenerationType }
			),
		onSuccess: (responseId: string) => {
			setFileId(responseId)
			pollStatus(responseId)
		},
		onError: error => {
			console.error('Ошибка при отправке:', error)
			setStatusText({ status: 'FAILED' } as Omit<IStatus, 'id'>)
		},
	})
	const { mutate: recoverMutation } = useMutation({
		mutationFn: (documentId: string) =>
			postGeminiData<string, string>(`documents/${documentId}/recover`),
		onSuccess: res => {
			alert(res)
			pollStatus(fileId)
		},
		onError: error => {
			console.error('Ошибка при отправке:', error)
		},
	})

	const pollStatus = useCallback(async (responseId: string) => {
		try {
			const status = await getApiResponse<IStatus>('status', {
				beginId: responseId,
			})
			setStatusText(status)

			if (
				status.status !== RESPONSE_STATUS.COMPLETED &&
				status.status !== RESPONSE_STATUS.FAILED &&
				status.status !== RESPONSE_STATUS.PARTIALLY_COMPLETED &&
				status.status !== RESPONSE_STATUS.RECOVERY_FAILED &&
				!status.status?.length
			) {
				setTimeout(() => pollStatus(responseId), 5000)
			}

			if (status.status === RESPONSE_STATUS.COMPLETED) {
				const fileData = await getApiResponse<IFilesLinks>(
					`/${responseId}/files`
				)
				setLinks(fileData)
			}
		} catch (error) {
			console.error('Ошибка при запросе статуса:', error)
		}
	}, [])

	const handleSend = useCallback(async () => {
		if (!responseData) {
			console.error('Нет данных для отправки.')
			return
		}
		try {
			await sendMutation.mutate(responseData)
		} catch (error) {
			console.error('Ошибка при мутации:', error)
		}
	}, [responseData, sendMutation])

	const handleRecover = useCallback(async () => {
		if (!fileId) {
			return
		}
		try {
			await recoverMutation(fileId)
		} catch (error) {
			console.error('Ошибка при мутации:', error)
		}
	}, [recoverMutation, fileId])
	return {
		uiState: {
			isGenerationWaiting,
			isRecoverable,
			completedStatus: isCompleted,
		},
		statusText,
		fileId,
		links,
		handleSend,
		handleRecover,
	}
}
