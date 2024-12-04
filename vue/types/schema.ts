export interface User {
	id: string
	first_name: string
	middle_name: string
	last_name: string
	email: string
	contact_number: string
	address: {
		city: string
		municipality: string
		lot: number
		block: number
		latitude: string
		longitude: string
	}
}
