import type { TGenerationType } from '@/shared/types/api.interface'
import {
	axiosGeminiCommon,
	axiosGeminiDocumentInstance,
} from '@/utils/axiosInstance'
import { buildUrl } from '@/utils/urlBuilder'
export async function getApiResponse<T>(
	endpoint: string,
	options?: {
		closeId?: string
		beginId?: string | null
		fileType?: string
		isFile?: boolean
	}
): Promise<T> {
	let url: string

	if (options?.beginId) {
		url = buildUrl(options.beginId, [endpoint])
	} else {
		url = buildUrl(endpoint, [options?.closeId])
	}

	if (options?.fileType) {
		const query = new URLSearchParams({ fileType: options.fileType }).toString()
		url += `?${query}`
	}
	if (options?.isFile) {
		const response = await axiosGeminiDocumentInstance.get(url, {
			responseType: 'blob',
		})
		return response.data
	}
	const response = await axiosGeminiDocumentInstance.get<T>(url)
	return response.data
}

export async function postGeminiData<T, U>(
	endpoint: string,
	data?: U,
	options?: {
		type?: TGenerationType
		parts?: (string | undefined)[]
	}
): Promise<T> {
	try {
		let url = options?.parts
			? buildUrl(endpoint, options.parts)
			: `/${endpoint}`

		if (options?.type) {
			const connector = url.includes('?') ? '&' : '?'
			url += `${connector}type=${options.type}`
		}

		const response = await axiosGeminiCommon.post<T>(url, data)

		return response.data
	} catch (error) {
		console.error('Ошибка при отправке данных:', error)
		throw error
	}
}

export async function deleteGeminiData(
	endpoint: string,
	id: number
): Promise<void> {
	await axiosGeminiCommon.delete(`${endpoint}/${id}`)
}
// export const fetchGeminiPreviewData = async ({ prompt }: IGeminiRequest) => {
// 	try {
// 		const response = await axiosGeminiGenerationInstance.post(`/structure`, {
// 			topic: prompt,
// 			language: 'RU',
// 		})

// 		return response.data
// 	} catch (error) {
// 		console.error('Error fetching Gemini data:', error)
// 		throw error
// 	}
// }
// export const fetchGeminiData = async (
// 	data: IGeminiResponse
// ): Promise<IGeminiResponse> => {
// 	try {
// 		const response = await axiosGeminiDocumentInstance.post(
// 			`/generate/with-plan`,
// 			data,
// 			{
// 				timeout: 900000,
// 			}
// 		)

// 		return response.data
// 	} catch (error) {
// 		console.error('Error fetching Gemini data:', error)
// 		throw error
// 	}
// }

// ПРИМЕР ТИПО ISR(НО ЭТО НЕ ОН, ПРОСТО ПОХОЖ) загрузка данных. Обновление каждые 10 секунд
// Он делает кэширование на уровне CDN.

// export const fetchGeminiDataISR = async ({ prompt }: IGeminiRequest) => {
// 	try {
// 		const response = await axiosGeminiInstance.post(
// 			`/gemini/generate`,
// 			{
// 				prompt: prompt,
// 				max_tokens: 150,
// 				temperature: 0.7,
// 			},
// 			{
// 				headers: {
// 					'Cache-Control': 's-maxage=300, stale-while-revalidate',
// 				},
// 			}
// 		)
// 		return response.data
// 	} catch (error) {
// 		console.error('Error fetching Gemini data:', error)
// 		throw error
// 	}
// }
