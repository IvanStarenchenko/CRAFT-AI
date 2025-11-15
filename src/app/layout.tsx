import { Container } from '@/components/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import QueryProvider from '@/components/QueryProvider/QueryProvider'
import type { Metadata } from 'next'
import { Fira_Code, Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import './globals.css'

const poppins = Poppins({
	variable: '--font-sans',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '900'],
	display: 'swap',
})

const firaCode = Fira_Code({
	variable: '--font-mono',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Craft',
	description: 'Create and craft unique texts with AI',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} ${firaCode.variable} antialiased`}>
				<QueryProvider>
					<Container>
						<Header />
						<Toaster />
						{children}
					</Container>
					<Footer />
				</QueryProvider>
			</body>
		</html>
	)
}
