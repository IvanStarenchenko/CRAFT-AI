import type { IContactItem, ISocial } from '@/shared/types/contacts.interface'
import { useContactsStore } from '@/store/contacts.store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const ContactBlock: React.FC<IContactItem> = ({ image, title, type, data }) => {
	const { savedType } = useContactsStore()
	return (
		<div
			className='p-6 rounded-2xl bg-[#f8f8f8] '
			style={{
				transition: 'all 0.3s ease',
				boxShadow:
					savedType === type ? '0px 8px 16px rgba(0, 0, 0, 0.4)' : 'none',
				transform: savedType === type ? 'scale(105%)' : 'none',
			}}
		>
			<div className='flex items-center mb-4 gap-x-[10px] '>
				<Image
					src={image}
					alt={title}
					width={40}
					height={40}
					className='w-10 h-10 mr-3'
				/>
				<div className='flex flex-col gap-y-[10px]'>
					<h3 className='font-semibold text-xl'>{title}</h3>
					{type === 'phone' && typeof data === 'string' && (
						<p>
							<Link href={`tel:${data}`} className='hover:underline'>
								{data}
							</Link>
						</p>
					)}

					{type === 'email' && Array.isArray(data) && (
						<ul className='space-y-1'>
							{(data as string[]).map((email, idx) => (
								<li key={idx}>
									<Link
										href={`mailto:${email}`}
										className='text-purple-600 hover:underline'
									>
										{email}
									</Link>
								</li>
							))}
						</ul>
					)}

					{type === 'social' && Array.isArray(data) && (
						<div className='flex space-x-3'>
							{(data as ISocial[]).map((social, idx) => (
								<Link
									key={idx}
									href={social.link}
									target='_blank'
									rel='noreferrer'
									className='hover:opacity-80 transition'
								>
									{social.icon}
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ContactBlock
