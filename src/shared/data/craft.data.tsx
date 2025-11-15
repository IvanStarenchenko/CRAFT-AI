import { PAGES } from '@/config/pages.config'
import { PLATECOLORS, WHOCOLORS } from '@/constants/colors.constants'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import type { ICraftItem } from '../../../craftItem.interface'

const project = <MdOutlineLibraryBooks size={25} color={WHOCOLORS.plate1} />
const report = <MdOutlineLibraryBooks size={25} color={WHOCOLORS.plate2} />
const coursework = <MdOutlineLibraryBooks size={25} color={WHOCOLORS.plate3} />
const presentation = (
	<MdOutlineLibraryBooks size={25} color={WHOCOLORS.plate4} />
)
const essay = <MdOutlineLibraryBooks size={25} color={WHOCOLORS.plate5} />
const text = <MdOutlineLibraryBooks size={25} color={WHOCOLORS.plate6} />

export const CRAFT: ICraftItem[] = [
	{
		id: 1,
		name: 'Проект',
		description: '10-20 страниц',
		icon: project,
		path: `${PAGES.CRAFTS}` + `/craft1`,
		bgc: PLATECOLORS.plate1,
		activeBg: WHOCOLORS.plate1,
		type: 'PROJECT',
	},
	{
		id: 2,
		name: 'Реферат',
		description: '10-15 страниц',
		icon: report,
		path: `${PAGES.CRAFTS}` + `/craft2`,
		bgc: PLATECOLORS.plate2,
		activeBg: WHOCOLORS.plate2,
		type: 'REPORT',
	},
	{
		id: 3,
		name: 'Курсовая',
		description: '25-35 страниц',
		icon: coursework,
		path: `${PAGES.CRAFTS}` + `/craft3`,
		bgc: PLATECOLORS.plate3,
		activeBg: WHOCOLORS.plate3,
		type: 'COURSEWORK',
	},
	{
		id: 4,
		name: 'Доклад',
		description: '10-15 страниц',
		icon: presentation,
		path: `${PAGES.CRAFTS}` + `/craft4`,
		bgc: PLATECOLORS.plate4,
		activeBg: WHOCOLORS.plate4,
		type: 'REFERAT',
	},
	{
		id: 5,
		name: 'Сочинение',
		description: '300 слов',
		icon: essay,
		path: `${PAGES.CRAFTS}` + `/craft4`,
		bgc: PLATECOLORS.plate5,
		activeBg: WHOCOLORS.plate5,
		type: 'ESSAY',
	},
	{
		id: 6,
		name: 'Текст',
		description: '15-20 страниц',
		icon: text,
		path: `${PAGES.CRAFTS}` + `/craft4`,
		bgc: PLATECOLORS.plate6,
		activeBg: WHOCOLORS.plate6,
		type: 'TEXT',
	},
]
