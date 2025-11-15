export function buildUrl(base: unknown, parts: unknown[]) {
	const baseStr = String(base ?? '')
	const cleanBase = baseStr.startsWith('/') ? baseStr.slice(1) : baseStr

	return (
		'/' + [cleanBase, ...parts.filter(Boolean).map(p => String(p))].join('/')
	)
}
