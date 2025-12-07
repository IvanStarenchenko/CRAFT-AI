'use client'
import { delAuthData } from '@/services/auth'
import { ASIDE } from '@/shared/data/profile.data'
import { useProfilesStore } from '@/store/profile.store'
export function Aside() {
	const { chosenItem, toggleItem } = useProfilesStore()

	const logout = () => {
		delAuthData('auth/logout')
	}

	return (
		<div>
			<ul className='flex flex-col sticky top-[120px] gap-y-3 bg-white w-fit rounded-2xl p-3 shadow-sm border border-gray-100'>
				{ASIDE.map(item => (
					<li
						key={item.id}
						onClick={item.id !== 5 ? () => toggleItem(item.id) : logout}
						className={`
        group flex items-center justify-center 
        py-3 px-4 rounded-xl cursor-pointer 
        transition-all duration-200 ease-in-out
        hover:shadow-md hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50
        ${
					chosenItem === item.id &&
					'bg-gradient-to-r from-cyan-100 to-teal-100 shadow-md'
				}
       ${
					item.id === 5 &&
					'hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600'
				}
      `}
					>
						<button className='flex items-center justify-center text-gray-600 group-hover:text-cyan-700 transition-colors duration-200'>
							<span className='text-2xl'>{item.icon}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
