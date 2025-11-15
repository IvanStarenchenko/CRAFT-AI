import { Logo } from '@/components/Header/headerComponents/logo'
export function About() {
	return (
		<div className='flex flex-col gap-y-[30px] max-w-[292px]'>
			<Logo color='white' textColor='white' />
			<p className='text-[14px] font-[500] leading-[120%] text-[color:var(--whiteMuted)]'>
				CRAFT — интерактивная платформа для легкого, удобного и быстрого
				создания проектов на любую тему.
			</p>
		</div>
	)
}
