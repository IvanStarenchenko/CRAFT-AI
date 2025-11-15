'use client'
import { Input } from '@/components/Input/Input'
import { useCraftInput } from '@/hooks/useCraftInput'
import { FaPencil } from 'react-icons/fa6'
import { GiStoneCrafting } from 'react-icons/gi'
export function CraftInput() {
	const { value, setValue, isPending, isError, error, handleCraft } =
		useCraftInput()

	return (
		<>
			<Input
				innerSvg={<FaPencil size={18} fill='#0c60f0' />}
				placeholder='Введите тему Крафта'
				value={value}
				onChange={e => setValue(e.target.value)}
				onClick={() => handleCraft()}
				btnSvg={<GiStoneCrafting size={24} fill='#fff' />}
				btnText={isPending ? 'Крафтинг...' : 'Скрафтить'}
				disabled={isPending}
				href='/crafting'
			/>
			{isError && (
				<p className='text-red-500 text-sm mt-2'>
					Ошибка при генерации: {String(error)}
				</p>
			)}
		</>
	)
}
