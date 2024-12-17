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
				<UFormGroup :error="errorMessage">
					<USelectMenu
						v-model="selectedPeople"
						:options="people"
						searchable-lazy
						searchable
						trailing
						multiple
						placeholder="Select People"
						searchable-placeholder="Search People here..." />
				</UFormGroup>
			</div>

			<template #footer>
				<UButton @click=";[(modal = false), resetForm()]" label="Close" />

				<UButton @click="submitForm" label="Save" />
			</template>
		</UCard>
	</UModal>
</template>

<script setup lang="ts">
import { defineRule, configure } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

defineRule('required', required)
configure({
	generateMessage: localize('en', {
		fields: {
			selectedPeople: {
				required: 'Please select a valid people',
			},
		},
	}),
})

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

const { handleSubmit, resetForm } = useForm({})
const { value: selectedPeople, errorMessage } = useField<string[]>('selectedPeople', 'required')

const submitForm = handleSubmit((value) => {
	console.log(value)

	resetForm()
})
</script>
