export interface Permission {
	__typename: 'Permission'
	id: number
	name: string
	description: string
	created_at: string
	updated_at: string
}

export interface PermissionInput {
	id: number
	name: string
	description: string
}

export interface ConnectPermissionRelations {
	connect: number[]
	sync: number[]
	delete: number[]
	upsert: PermissionInput[]
}

export interface ConnectPermissionRelation {
	connect: number
	sync: number
	delete: number
	upsert: PermissionInput
}

export interface Role {
	__typename: 'Role'
	id: number
	name: string
	description: string
	created_at: string
	updated_at: string
	permissions: Permission[]
}

export interface RoleInput {
	id: number
	name: string
	description: string
	permissions: ConnectPermissionRelations
}

export interface ConnectRoleRelations {
	connect: number[]
	sync: number[]
	delete: number[]
	upsert: RoleInput[]
}

export interface ConnectRoleRelation {
	connect: number
	sync: number
	delete: number
	upsert: RoleInput
}

export interface Address {
	__typename: 'Address'
	id: number
	city: string
	municipality: string
	lot: number
	block: number
	latitude: string
	longitude: string
	created_at: string
	updated_at: string
}

export interface AddressInput {
	id: number
	city: string
	municipality: string
	lot: number
	block: number
	latitude: string
	longitude: string
}

export interface ConnectAddressRelations {
	connect: number[]
	sync: number[]
	delete: number[]
	upsert: AddressInput[]
}

export interface ConnectAddressRelation {
	connect: number
	sync: number
	delete: number
	upsert: AddressInput
}

export interface User {
	__typename: 'User'
	id: number
	first_name: string
	middle_name: string
	last_name: string
	created_at: string
	updated_at: string
	email: string
	contact_number: string
	address: Address
	roles: Role[]
	permissions: Permission[]
}

export interface UserInput {
	id: number
	first_name: string
	middle_name: string
	last_name: string
	created_at: string
	updated_at: string
	roles: ConnectRoleRelations
	permissions: ConnectPermissionRelations
	address: ConnectAddressRelation
}

export interface ConnectUserRelations {
	connect: number[]
	sync: number[]
	delete: number[]
	upsert: UserInput[]
}

export interface ConnectUserRelation {
	connect: number
	sync: number
	delete: number
	upsert: UserInput
}
