import { CONTACT_ITEM } from '@/shared/data/contacts.data'
import { useContactsStore } from '@/store/contacts.store'
import ContactBlock from './ContactBlock'
export function Left() {
	const { toggleType } = useContactsStore()
	return (
		<div>
			<ul>
				{CONTACT_ITEM.map((item, index) => (
					<li
						key={index}
						className='mb-[30px] last:mb-0 cursor-pointer hover:shadow-2xl transition '
						onClick={() => {
							toggleType(item.type)
							console.log(item.type)
						}}
					>
						<ContactBlock
							image={item.image}
							title={item.title}
							type={item.type}
							data={item.data}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
