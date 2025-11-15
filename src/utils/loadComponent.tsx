import { Skeleton } from '@/components/Skeleton/Skeleton'
import dynamic from 'next/dynamic'
export const loadComponent = <T extends object>(
	path: string,
	options?: {
		ssr?: boolean
		loading?: React.ReactNode
	}
) => {
	dynamic<T>(() => import(path), {
		ssr: options?.ssr ?? true,
		loading: () =>
			options?.loading || (
				<div className='p-4 '>
					<Skeleton count={4} />
				</div>
			),
	})
}
