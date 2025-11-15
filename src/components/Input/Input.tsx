'use client'
import type { IInputProps } from '@/shared/types/input.interface'
import { useCallback, useEffect, useState } from 'react'
export function Input({
	innerSvg,
	type,
	placeholder,
	value,
	onChange,
	onClick,
	btnSvg,
	btnText,
	disabled,
	flex = 'row',
}: IInputProps) {
	const handleClick = useCallback(async () => {
		await onClick?.()
	}, [onClick])

	const [isFocus, setIsFocus] = useState(false)

	useEffect(() => {
		const enterInput = (event: KeyboardEvent) => {
			if (isFocus && event.key === 'Enter') {
				handleClick()
				setIsFocus(false)
			}
		}
		window.addEventListener('keydown', enterInput)
		return () => window.removeEventListener('keydown', enterInput)
	}, [isFocus, handleClick])

	return (
		<div
			className={`relative flex ${
				flex === 'row'
					? 'flex-row items-center gap-x-[20px] h-[70px]'
					: 'flex-col gap-y-[20px] h-[130px]'
			}`}
		>
			<div className='absolute left-[1%] top-[35%]'>{innerSvg}</div>
			<input
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				className='text-[18px] pl-[50px] pr-[15px] pt-[10px] pb-[10px] h-full w-full border border-solid border-[#d1d5db] rounded-lg placeholder:text-[#9ca3af] text-[#111827] bg-white  focus:border-[color:var(--cyan)] focus:ring-1 focus:ring-[color:var(--cyan)]'
				type={type || 'text'}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<button onClick={handleClick} className='h-full' disabled={disabled}>
				<span
					className='flex items-center justify-center gap-x-[10px] text-[18px] text-white font-[500] bg-cyan-600 rounded-2xl h-full px-5'
					style={{
						opacity: disabled ? 0.5 : 1,
						cursor: disabled ? 'default' : 'pointer',
					}}
				>
					{btnSvg}
					{btnText}
				</span>
			</button>
		</div>
	)
}
