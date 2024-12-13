<template>
	<UCard
		class="m-3 rounded-lg"
		:ui="{
			header: {
				background: 'dark:bg-gray-800',
				padding: 'p-2 sm:p-2',
				base: 'rounded-t-lg dark:bg-gray-800 border-white items-center flex gap-1 justify-end',
			},
			footer: { padding: 'p-1 sm:p-1', background: 'dark:bg-gray-800', base: 'rounded-b-lg flex justify-center' },
			body: { background: 'dark:bg-gray-800', padding: 'p-0 sm:p-0' },
			divide: 'divide-y divide-gray-100 dark:divide-gray-700',
		}">
		<template #header>
			<DataTableUpsertButton />

			<UTooltip text="Filters" :popper="{ placement: 'top' }">
				<UButton icon="material-symbols:filter-list" size="xs" square />
			</UTooltip>

			<UPopover>
				<UTooltip text="Download" :popper="{ placement: 'top' }">
					<UButton icon="material-symbols:download-2-rounded" size="xs" square />
				</UTooltip>

				<template #panel>
					<div class="p-2 gap-2 flex">
						<UTooltip text="PDF" :popper="{ placement: 'top' }">
							<UButton icon="streamline:convert-pdf-2-solid" size="xs" square />
						</UTooltip>
						<UTooltip text="Excel" :popper="{ placement: 'top' }">
							<UButton icon="ri:file-excel-2-fill" size="xs" square />
						</UTooltip>
					</div>
				</template>
			</UPopover>

			<UInput placeholder="Search here..." class="w-[250px]" />
		</template>

		<UTable
			:columns="columns"
			:rows="people"
			:ui="{
				th: { size: 'text-xs', padding: 'p-2' },
				tr: { base: 'dark:hover:bg-gray-700 hover:bg-gray-100 cursor-pointer gap-1' },
				td: { base: 'whitespace-nowrap ', padding: 'p-1', color: 'text-gray-500 dark:text-gray-400', size: 'text-xs' },
			}">
			<template #actions-data>
				<DataTableUpsertButton />

				<UTooltip text="Delete" :popper="{ placement: 'top' }" class="ml-1">
					<UButton icon="material-symbols:delete-rounded" size="xs" square />
				</UTooltip>

				<UTooltip text="Logs" :popper="{ placement: 'top' }" class="ml-1">
					<UButton icon="material-symbols:clinical-notes" size="xs" square />
				</UTooltip>
			</template>
		</UTable>

		<template #footer>
			<UPagination
				v-model="page"
				class="dark:bg-gray-800 bg-gray-800 rounded-lg border-none"
				:page-count="5"
				:total="items.length"
				:ui="{
					rounded: 'first:rounded-s-md last:rounded-e-md',
				}" />
		</template>
	</UCard>
</template>

<script setup lang="ts">
import type { TableColumn } from '#ui/types'

const page = ref(1)

const items = ref(Array(55))

const columns = ref<TableColumn[]>([
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
		key: 'actions',
		label: 'Actions',
	},
])

const { data: people } = await useAsyncData('get-people', async () => {
	const response = await $fetch<any[]>(`https://retoolapi.dev/eLqmml/data`)

	return response
})
</script>
