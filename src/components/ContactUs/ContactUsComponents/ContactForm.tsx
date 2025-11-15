import { useContactsStore } from '@/store/contacts.store'

export function ContactForm() {
	const { savedType } = useContactsStore()
	return (
		<div>
			<form className='flex flex-col gap-y-4'>
				<div className='flex items-center gap-x-[24px]'>
					<div className='label w-full'>
						<label htmlFor=''>Name</label>
						<input
							type='text'
							placeholder='Ваше имя'
							className='p-3  border border-[color:var(--secondGrey)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--mainPurple)]'
						/>
					</div>
					{(savedType === 'phone' && (
						<div className='label w-full'>
							<label htmlFor=''>Phone</label>
							<input
								type='phone'
								placeholder='Ваш номер'
								className='p-3 border border-[color:var(--secondGrey)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--mainPurple)]'
							/>
						</div>
					)) ||
						(savedType === 'email' && (
							<div className='label w-full'>
								<label htmlFor=''>Email</label>
								<input
									type='email'
									placeholder='Укажите вашу почту'
									className='p-3 border border-[color:var(--secondGrey)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--mainPurple)]'
								/>
							</div>
						))}
				</div>
				<div className='label'>
					<label htmlFor=''>Message</label>
					<textarea
						placeholder='Ваше сообщение'
						className='p-3 border border-[color:var(--secondGrey)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--mainPurple)] h-32 resize-none'
					></textarea>
				</div>
				<button type='submit' className='w-fit btn-main-style'>
					Send Question
				</button>
			</form>
		</div>
	)
}
