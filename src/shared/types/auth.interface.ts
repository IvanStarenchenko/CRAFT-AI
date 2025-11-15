export interface IRegistration extends ILogin {
	firstName: string
	lastName: string
	referral?: string
}

export interface ILogin {
	contact: string
	password: string
}
