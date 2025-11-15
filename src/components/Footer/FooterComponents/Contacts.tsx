import { FOOTER } from '@/shared/data/footer.data'

export function Contacts() {
	return (
		<div className='flex flex-col gap-y-[15px] '>
			<h3 className='footer-title'>Контакты</h3>
			<h4 className='text-xl text-[color:var(--white)]'>
				{FOOTER.contacts.number}
			</h4>

			<span className='footer-subtitle'>{FOOTER.contacts.gmail[0]}</span>
			<span className='footer-subtitle'>{FOOTER.contacts.gmail[1]}</span>
			<span className='footer-subtitle'>{FOOTER.address}</span>
		</div>
	)
}
