import Link from 'next/link'

export function Breadcrumbs({ children }: { children?: React.ReactNode }) {
	return (
		<div className='flex items-center gap-x-[10px] text-[16px] '>
			<Link href={'/'} className='text-[color:var(--mainPurple)] underline'>
				Main
			</Link>
			<span className='text-2xl'> {'>'} </span>
			{children}
		</div>
	)
}
