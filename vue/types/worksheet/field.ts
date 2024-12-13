import type * as SelectUI from '#ui/ui.config/forms/select'
import type * as InputUI from '#ui/ui.config/forms/input'
import type * as TextareaUI from '#ui/ui.config/forms/textarea'
import type * as SelectMenuUI from '#ui/ui.config/forms/selectMenu'

interface BaseInput {
	grid?: { column?: string; hidden?: boolean }
	type: 'input' | 'textarea' | 'select' | 'selectMenu' | 'radio' | 'number' | 'date' | 'form' | 'uploader'
	validations: {
		rule: string
		messages: {
			[K: string]: string
		}
	}
}

/**
 * Interface for type `input`
 *
 */
export interface InputInterface extends BaseInput {
	type: 'input'
	attributes: any
	ui?: RecursiveValue<typeof InputUI>
}

/**
 * Interface for type `textarea`
 *
 */
export interface TextareaInterface extends BaseInput {
	type: 'textarea'
	attributes: any
	ui?: RecursiveValue<typeof TextareaUI>
}

/**
 * Interface for type `select`
 *
 */
export interface SelectInterface extends BaseInput {
	type: 'select'
	attributes: any
	ui?: RecursiveValue<typeof SelectUI>
}

/**
 * Interface for type `selectMenu`
 *
 */
export interface SelectMenuInterface extends BaseInput {
	type: 'selectMenu'
	attributes: any
	ui?: RecursiveValue<typeof SelectMenuUI>
}

/**
 * Interface for type `form`
 *
 */
export interface FormInterface<M = string> extends BaseInput {
	type: 'form'
	label: string
	graphql?: {
		method: 'connect' | 'sync' | 'syncWithoutDetaching' | 'upsert'
		multiple?: boolean
	}
	fields: { [K: string]: FieldType<M> }
}

/**
 * Interface for type `uploader`
 *
 */
export interface UploaderInterface extends BaseInput {
	type: 'uploader'
	label: string
	multiple?: boolean
}

export type FieldType<M = string> = InputInterface | TextareaInterface | SelectInterface | SelectMenuInterface | FormInterface<M> | UploaderInterface
