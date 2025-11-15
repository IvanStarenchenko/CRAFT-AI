import { ContactForm } from './ContactForm'
export function Right() {
	return (
		<div className='flex flex-col gap-y-[24px] '>
			<div className='flex flex-col gap-y-[12px]'>
				<h2
					className='font-[700] text-[24px]
			leading-[32px]'
				>
					Нужна помощь ?
				</h2>
				<span
					className='font-[500] text-[16px]
			leading-[24px] text-[color:var(--secondGrey)]'
				>
					Оставьте заявку и мы ответим вам как можно скорее
				</span>
			</div>
			<ContactForm />
		</div>
	)
}
