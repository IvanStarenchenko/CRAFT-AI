'use client'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { useMemo, useRef, useState } from 'react'

export function useVerification() {
	const inputRefs = useRef<Array<HTMLInputElement | null>>([])
	const [code, setCode] = useState<string[]>(['', '', '', '', '', ''])

	const verifyCode = code.join('')

	const isCodeComplete = useMemo(
		() => code.every(digit => digit.length === 1),
		[code]
	)

	const handleChange = (i: number, e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, '')

		const newCode = [...code]
		newCode[i] = value.slice(-1)
		setCode(newCode)

		if (value && i < inputRefs.current.length - 1) {
			inputRefs.current[i + 1]?.focus()
		}
	}

	const handleKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Backspace' && !code[i] && i > 0) {
			const newCode = [...code]
			newCode[i - 1] = ''
			setCode(newCode)
			inputRefs.current[i - 1]?.focus()
		}
	}

	return {
		inputRefs,
		code,
		isCodeComplete,
		verifyCode,
		handleChange,
		handleKeyDown,
	}
}
