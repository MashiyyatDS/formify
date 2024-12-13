<template>
	<UTooltip @click="modal = true" text="Add Data" :popper="{ placement: 'top' }">
		<UButton icon="mdi-plus" size="xs" square />
	</UTooltip>

	<UModal v-model="modal" prevent-close>
		<UCard
			:ui="{
				footer: { base: 'flex justify-end gap-1', padding: 'p-1 sm:p-1' },
				header: { padding: 'p-2 sm:p-2', base: 'font-sans' },
			}">
			<template #header>
				<span>Sample Modal</span>
			</template>

			<div class="p-0">
				<USelectMenu
					v-model="selected"
					:options="people"
					searchable-lazy
					searchable
					placeholder="Select People"
					searchable-placeholder="Search People here..." />
			</div>

			<template #footer>
				<UButton @click="modal = false" label="Close" />

				<UButton @click="modal = false" label="Save" />
			</template>
		</UCard>
	</UModal>
</template>

<script setup lang="ts">
const modal = ref(false)

const people = [
	'Wade Cooper',
	'Arlene Mccoy',
	'Devon Webb',
	'Tom Cook',
	'Tanya Fox',
	'Hellen Schmidt',
	'Caroline Schultz',
	'Mason Heaney',
	'Claudie Smitham',
	'Emil Schaefer',
]

const selected = ref(null)

function searchPeople() {
	console.log('Working...')
}
</script>
