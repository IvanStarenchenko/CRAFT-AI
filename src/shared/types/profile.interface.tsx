type authProviders = 'LOCAL' | 'GOOGLE'

export interface IProfile {
	id: number
	icon: React.ReactNode
}

export interface IUser {
	readonly id: number
	providerUserId: string
	email: string
	phoneNumber: string
	name: string
	authProvider: authProviders
	twoFactorEnabled: boolean
}

export interface IEditFields {
	name?: string
	email?: string
	phoneNumber?: string
}
