import { RESPONSE_STATUS, STATUS_GROUPS, statuses } from '@/constants/Statuses'
import { getApiResponse, postGeminiData } from '@/services/gemini'
import type {
	GenerateRequest,
	IFilesLinks,
	IGeminiResponse,
	IStatus,
	TGenerationType,
} from '@/shared/types/api.interface'
import { useCraftStore } from '@/store/craft.store'
import { useResponseStore } from '@/store/gemini.store'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
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

	const {
		isRecoverable,
		isCompleted,
		isGenerationWaiting,
		stopPollingStatuses,
	} = statuses(status || '')

	const { mutate: sendMutation, isPending: isSending } = useMutation({
		mutationFn: ({ data, documentId }: GenerateRequest) =>
			postGeminiData<string, IGeminiResponse>(
				`documents/${documentId}/generate`,
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
				!stopPollingStatuses.includes(
					status.status as (typeof STATUS_GROUPS.RETRY)[number]
				)
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
			toast.error('Нет данных для отправки.')
			return
		}
		try {
			sendMutation({
				data: responseData,
				documentId: fileId,
			})
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
		isSending,
		handleSend,
		handleRecover,
	}
}
