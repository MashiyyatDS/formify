<template>
	<UCard
		class="m-3 rounded-lg"
		:ui="{
			header: {
				background: 'dark:bg-gray-800',
				padding: 'p-2 sm:p-2',
				base: 'rounded-t-lg dark:bg-gray-800 border-white items-center flex gap-1',
			},
			footer: { padding: 'p-1 sm:p-1', background: 'dark:bg-gray-800', base: 'rounded-b-lg d-flex justify-center' },
			body: { background: 'dark:bg-gray-800', padding: 'p-0 sm:p-0' },
			divide: 'divide-y divide-gray-100 dark:divide-gray-700',
		}">
		<template #header>
			<UTooltip text="Add Data" :popper="{ placement: 'top' }">
				<UButton icon="mdi-plus" size="xs" square />
			</UTooltip>

			<UTooltip text="Filters" :popper="{ placement: 'top' }">
				<UButton icon="material-symbols:filter-list" size="xs" square />
			</UTooltip>

			<UInput placeholder="Search here..." />
		</template>

		<UTable
			:columns="columns"
			:rows="people"
			:ui="{
				th: { size: 'text-xs', padding: 'p-2' },
				tr: { base: 'dark:hover:bg-gray-700 hover:bg-gray-100 cursor-pointer' },
				td: { base: 'whitespace-nowrap ', padding: 'p-2', color: 'text-gray-500 dark:text-gray-400', size: 'text-xs' },
			}" />

		<template #footer>
			<UPagination
				v-model="page"
				class="bg-gray-800 rounded-lg border-none"
				:page-count="5"
				:total="items.length"
				:ui="{
					rounded: 'first:rounded-s-md last:rounded-e-md dark:bg-cyan-400',
				}" />
		</template>
	</UCard>
</template>

<script setup lang="ts">
const page = ref(1)

const items = ref(Array(55))

const columns = [
	{
		key: 'id',
		label: 'ID',
	},
	{
		key: 'name',
		label: 'User name',
	},
	{
		key: 'title',
		label: 'Job position',
	},
	{
		key: 'email',
		label: 'Email',
	},
	{
		key: 'role',
	},
]

const people = [
	{
		id: 1,
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		email: 'lindsay.walton@example.com',
		role: 'Member',
	},
	{
		id: 2,
		name: 'Courtney Henry',
		title: 'Designer',
		email: 'courtney.henry@example.com',
		role: 'Admin',
	},
	{
		id: 3,
		name: 'Tom Cook',
		title: 'Director of Product',
		email: 'tom.cook@example.com',
		role: 'Member',
	},
	{
		id: 4,
		name: 'Whitney Francis',
		title: 'Copywriter',
		email: 'whitney.francis@example.com',
		role: 'Admin',
	},
	{
		id: 5,
		name: 'Leonard Krasner',
		title: 'Senior Designer',
		email: 'leonard.krasner@example.com',
		role: 'Owner',
	},
	{
		id: 6,
		name: 'Floyd Miles',
		title: 'Principal Designer',
		email: 'floyd.miles@example.com',
		role: 'Member',
	},
	{
		id: 4,
		name: 'Whitney Francis',
		title: 'Copywriter',
		email: 'whitney.francis@example.com',
		role: 'Admin',
	},
	{
		id: 5,
		name: 'Leonard Krasner',
		title: 'Senior Designer',
		email: 'leonard.krasner@example.com',
		role: 'Owner',
	},
	{
		id: 6,
		name: 'Floyd Miles',
		title: 'Principal Designer',
		email: 'floyd.miles@example.com',
		role: 'Member',
	},
]

definePageMeta({
	layout: 'default',
})

useHead({
	title: 'Dashboard',
})
</script>
