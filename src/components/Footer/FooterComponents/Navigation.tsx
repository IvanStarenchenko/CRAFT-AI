import Link from 'next/link'
import { HEADER } from '../../../shared/data/header.data'
export function Navigation() {
	return (
		<div className='flex flex-col gap-y-[15px]'>
			<h3 className='footer-title'>Информация</h3>
			<nav>
				<ul className='flex flex-col gap-y-[4px]'>
					{HEADER.map((item, index) => (
						<li
							key={index}
							className='flex flex-col gap-y-[4px] footer-subtitle'
						>
							<Link href={item.href}>{item.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
