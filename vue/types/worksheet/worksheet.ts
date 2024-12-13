export type RecursiveValue<M> = {
	[K in keyof M]?: RecursiveValue<M[K]>
}

export interface Worksheet<M = string> {
	title: string
	fields: M extends string ? { [K: string]: FieldType<M> } : { [K in keyof M]?: FieldType<M[K]> }
	initialValue?: M extends string ? { [K: string]: any } : { [K in keyof M]?: RecursiveValue<M[K]> }
}
