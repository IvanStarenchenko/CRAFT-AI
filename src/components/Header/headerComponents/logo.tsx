import { PAGES } from '@/config/pages.config'
import Link from 'next/link'
import { GiStoneCrafting } from 'react-icons/gi'
interface Props {
	color?: string
	textColor?: string
}
export function Logo({ color = 'black', textColor = 'black' }: Props) {
	return (
		<Link href={PAGES.HOME} className='flex items-center gap-2'>
			<GiStoneCrafting size={40} fill={color} />
			<span className='text-2xl' style={{ color: textColor }}>
				Craft
			</span>
		</Link>
	)
}
