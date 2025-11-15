import { WHOCOLORS } from '@/constants/colors.constants'
import { BsChatLeftText } from 'react-icons/bs'
import { LiaSchoolSolid } from 'react-icons/lia'
import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md'
import type { IWhoItem } from '../types/whoItem.interface'

const school = <LiaSchoolSolid size={32} fill={WHOCOLORS.plate1} />
const student = <MdOutlineSchool size={32} fill={WHOCOLORS.plate2} />
const business = <MdOutlineBusinessCenter size={32} fill={WHOCOLORS.plate3} />
const chat = <BsChatLeftText size={28} fill={WHOCOLORS.plate4} />
export const WHO_DATA: IWhoItem[] = [
	{
		icon: school,
		name: 'Школьникам',
		description: 'Сдать выпускные экзамены или поступить в ВУЗ.',
	},
	{
		icon: student,
		name: 'Студентам',
		description:
			'Переехать на обучение в другую страну или найти высокооплачеваемую работу',
	},
	{
		icon: business,
		name: 'Бизнесменам',
		description:
			'Завести полезные знакомства среди иностранцев и масштабировать бизнес',
	},
	{
		icon: chat,
		name: 'Общительным',
		description:
			'Создать счастливую семью с иностранцем и интегрироваться в новое общество',
	},
]
