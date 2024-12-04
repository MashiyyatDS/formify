export interface Formify<T = string> {
	inputs?: T extends string ? { [I: string]: FormifyInput } : { [K in keyof T]?: FormifyInput }
	forms?: T extends string ? { [I: string]: Formify } : { [K in keyof T]?: Formify }
	appends?: {
		[A: string]: Formify<T> & { append?: Formify<T>[]; prepend?: Formify<T>[] }
	}
}

export interface FormifyInput {
	attributes: {
		placeholder: string
		label: string
	}
	grid: {
		column?: number
		hidden?: boolean
	}
	validations?: {
		rules: string
		messages: {
			[R: string]: string
		}
	}
	value?: any
}
