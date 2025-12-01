import { RESPONSE_STATUS } from '@/constants/Statuses'
export type TResponseStatus = keyof typeof RESPONSE_STATUS | null

export type TGenerationType =
	| 'PROJECT'
	| 'REPORT'
	| 'COURSEWORK'
	| 'REFERAT'
	| 'ESSAY'
	| 'TEXT'
	| undefined

export interface IStatus {
	id: number
	status: TResponseStatus | null
}
export type GenerateRequest = {
	data: IGeminiResponse
	documentId: string
}
export interface IGeminiRequest {
	topic: string
	language?: string
}
export interface IGeminiResponse {
	documentId: string
	title: string
	introduction: string
	chapters: IGeminiResponseChapters[]
	conclusion?: string
	references?: string[]
}
export interface IGeminiResponseChapters {
	title: string
	content: string
	sections: {
		title: string
		content: string
		contentHints: string[]
	}[]
	conclusion?: string
}

export interface IFilesLinks {
	readonly id: number
	docxFileName: string
	pdfFileName: string
}
