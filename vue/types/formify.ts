export interface Formify<T = string> {
	fields: {
		inputs: {
			[I: string]: FormifyInput
		}
		validations: {
			rules: string
			messages: {
				[R: string]: string
			}
		}
	}
	forms: {
		[F: string]: Formify<T>
	}
	appends: {
		[A: string]: Formify<T> & { append?: Formify<T>[]; prepend?: Formify<T>[] }
	}
}

export interface FormifyInput {
	title: string
	attributes: {
		placeholder: string
		label: string
	}
	grid: {
		column?: number
		hidden?: boolean
	}
}
