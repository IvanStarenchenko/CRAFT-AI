import { RESPONSE_STATUS } from '@/constants/Statuses'
export type TResponseStatus = keyof typeof RESPONSE_STATUS | null

export type TGenerationType =
	| 'PROJECT'
	| 'REPORT'
	| 'COURSEWORK'
	| 'REFERAT'
	| 'ESSAY'
	| 'TEXT'

export interface IStatus {
	id: number
	status: TResponseStatus | null
}
export interface IGeminiRequest {
	topic: string
	language?: string
}
export interface IGeminiResponse {
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
