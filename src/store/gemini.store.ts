import type { IGeminiResponse } from '@/shared/types/api.interface'
import { create } from 'zustand'
interface IProps {
	responseData: IGeminiResponse | null
	setResponseData: (data: IGeminiResponse | null) => void
	clearResponseData: () => void
}

export const useResponseStore = create<IProps>(set => ({
	responseData: null,
	setResponseData: data => set({ responseData: data }),
	clearResponseData: () => set({ responseData: null }),
}))
