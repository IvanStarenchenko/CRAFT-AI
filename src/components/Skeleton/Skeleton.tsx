export function Skeleton({ count }: { count?: number }) {
	return (
		<div className='animate-pulse space-y-6'>
			<div className='h-6 bg-gray-300 rounded w-1/3'></div>
			<div className='h-4 bg-gray-300 rounded w-2/3'></div>
			<div className='space-y-4'>
				{Array.from({ length: count || 3 }).map((_, index) => (
					<div key={index} className='h-4 bg-gray-300 rounded w-[86%]'></div>
				))}
			</div>
		</div>
	)
}
