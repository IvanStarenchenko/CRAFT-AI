import { Container } from '../Container/Container'
import { About } from './FooterComponents/About'
import { Contacts } from './FooterComponents/Contacts'
import { FooterBottom } from './FooterComponents/FooterBottom'
import { Navigation } from './FooterComponents/Navigation'
export function Footer() {
	return (
		<footer className='gradientBg'>
			<Container>
				<div className='grid grid-cols-3  gap-x-[100px] justify-between pt-[37px] pb-[50px]'>
					<About />
					<Navigation />
					<Contacts />
				</div>
			</Container>
			<FooterBottom />
		</footer>
	)
}
