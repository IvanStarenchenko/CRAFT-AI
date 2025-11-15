import type { IEditFields } from '@/shared/types/profile.interface'
import { UserForm } from './UserForm'
import { UserTop } from './UserTop'
interface IUserEditProps {
	edit: boolean
	toggleEdit: () => void
	onSave: (data: IEditFields) => void
	onCancel: () => void
}

export function UserInfo(props: IUserEditProps) {
	return (
		<div className=' mt-[20px]  p-[15px] rounded-2xl bg-[color:#fff] shadow-2xl'>
			<UserTop
				edit={props.edit}
				onCancel={props.onCancel}
				toggleEdit={props.toggleEdit}
			/>
			<UserForm
				edit={props.edit}
				toggleEdit={props.toggleEdit}
				onSave={props.onSave}
			/>
		</div>
	)
}
