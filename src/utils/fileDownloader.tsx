export const handleDownload = async (
	links: { docxFileName: string; pdfFileName: string },
	format: string,
	title: string
) => {
	try {
		const fileUrl = format === 'pdf' ? links?.pdfFileName : links?.docxFileName
		const a = document.createElement('a')
		a.href = fileUrl
		a.download = `${title}.${format}`
		document.body.appendChild(a)
		a.click()
		a.remove()
	} catch (error) {
		console.error('Ошибка при скачивании файла:', error)
	}
}
