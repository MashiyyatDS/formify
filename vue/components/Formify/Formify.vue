<template>
	<UTabs v-model="tab" :items="tabs" class="w-full">
		<template #item="{ item }">
			<div v-if="item.key === 'Form'">
				<UCard
					:ui="{
						header: { background: 'dark:bg-gray-800', padding: 'p-3 sm:p-3' },
						footer: { padding: 'p-1 sm:p-1', background: 'dark:bg-gray-800' },
						body: { background: 'dark:bg-gray-800' },
						divide: 'divide-y divide-gray-100 dark:divide-gray-700',
					}">
					<template #header>
						<span>Formify {{ useColorMode().value }}</span>
					</template>

					<div>
						<template v-if="formify.inputs">
							<div class="grid grid-cols-12 gap-1">
								<div v-for="(formifyInput, key) in formify.inputs" :key="key" :class="`col-span-12 sm:col-span-6`">
									<slot :name="`field-${key}`">
										<FormifyInput
											v-if="!$slots[`field-${key}`]"
											:model-value="formifyInput"
											:field-name="`${key}`"
											class="mb-3" />
									</slot>
								</div>
							</div>
						</template>
					</div>

					<template #footer>
						<UButton @click="resetForm" label="Reset" class="m-1" />

						<UButton @click="submitForm" label="Save" class="m-1" />
					</template>
				</UCard>
			</div>

			<div v-if="item.key === 'Confirmation'">
				<small>
					<pre>{{ payload }}</pre>
				</small>
			</div>
		</template>
	</UTabs>
</template>

<script setup lang="ts">
const formify = defineModel<Formify>({ required: true })

const emit = defineEmits(['formSubmitted'])

const { handleSubmit, resetForm, values, errors } = useForm({
	initialValues: formify.value?.initialValue,
	keepValuesOnUnmount: true,
})

const tab = ref(0)
const tabs = [
	{
		key: 'Form',
		label: 'Form',
		icon: 'mdi-pencil',
		content: 'This is the content shown for Tab1',
	},
	{
		key: 'Confirmation',
		label: 'Confirmation',
		icon: 'i-heroicons-arrow-down-tray',
		content: 'And, this is the content for Tab2',
	},
]

const submitForm = handleSubmit((value) => {
	emit('formSubmitted', {
		...(formify.value?.initialValue ?? {}),
		...value,
	})

	tab.value = 1
})

const payload = computed(() => ({
	...(formify.value?.initialValue ?? {}),
	...values,
}))
</script>
