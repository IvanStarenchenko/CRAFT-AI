import { URLS } from '@/constants/API.constants'
import axios from 'axios'

const ORCHESTRATOR = URLS.GEMINI_ORCHESTRATOR_API_URL
const DOCUMENT = URLS.GEMINI_DOCUMENT_API_URL
const COMMON = URLS.GEMINI_COMMON_URL
const AUTH = URLS.AUTH_URL

export const axiosGeminiOrchestratorInstance = axios.create({
	baseURL: ORCHESTRATOR,
	headers: {
		'Content-Type': 'application/json',
	},
})
export const axiosGeminiDocumentInstance = axios.create({
	baseURL: DOCUMENT,
	headers: {
		'Content-Type': 'application/json',
	},
})
export const axiosGeminiCommon = axios.create({
	baseURL: COMMON,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
})
export const axiosAuth = axios.create({
	withCredentials: true,
	baseURL: AUTH,
	headers: {
		'Content-Type': 'application/json',
	},
})
