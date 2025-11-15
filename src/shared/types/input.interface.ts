export interface IInputProps {
	innerSvg?: React.ReactNode
	type?: 'text' | 'number' | 'password' | 'email'
	placeholder?: string
	value?: string | number
	btnSvg?: React.ReactNode
	btnText?: string
	flex?: 'row' | 'column'
	disabled?: boolean
	href?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClick?: () => void
}
