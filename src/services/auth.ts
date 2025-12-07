import { axiosAuth } from '@/utils/axiosInstance'
import { buildUrl } from '@/utils/urlBuilder'
import type { AxiosRequestConfig } from 'axios'

export async function getUserData<T>(
	endpoint: string
	//token?: string
): Promise<T> {
	const url = buildUrl(endpoint, [])

	const config: AxiosRequestConfig = {}

	// if (token) {
	// 	config.headers = {
	// 		Authorization: `Bearer ${token}`,
	// 	}
	// }

	const { data } = await axiosAuth.get<T>(url, config)
	return data
}

export async function postAuthData<T, U>(
	endpoint: string,
	data: U,
	options?: {
		verifId?: string
		code?: string
	}
): Promise<T> {
	let url = buildUrl(endpoint, [options?.verifId])

	if (options?.code || options?.verifId) {
		url += `?code=${options.code}`
	}

	const { data: res } = await axiosAuth.post<T>(url, data)
	return res
}

export async function delAuthData<T>(endpoint: string): Promise<T> {
	const url = buildUrl(endpoint, [])

	const { data } = await axiosAuth.delete<T>(url)
	return data
}
