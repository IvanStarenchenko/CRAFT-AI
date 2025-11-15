'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HEADER } from '../../../shared/data/header.data'

export function Menu() {
	const pathname = usePathname()

	return (
		<nav>
			<ul className='flex gap-4'>
				{HEADER.map((item, index) => (
					<li key={index}>
						<Link
							href={item.href}
							className={`text-[18px] text-[#000] ${
								pathname === item.href && 'btn-underline'
							}`}
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
