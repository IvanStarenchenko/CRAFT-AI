'use client'
import { useEffect, useState } from 'react'

export function DateTime() {
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date())
		}, 1000)

		return () => clearInterval(timerId)
	}, [])

	const getFormattedDate = (date: Date) => {
		const options: Intl.DateTimeFormatOptions = {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}

		return date.toLocaleDateString('en-US', options)
	}
	return <div>{getFormattedDate(currentTime)}</div>
}
