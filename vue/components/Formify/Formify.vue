<template>
	<v-card variant="flat" class="rounded-lg border-thin m-5">
		<v-card-title>Formify</v-card-title>

		<v-divider />

		<v-card-text>
			<template v-if="formify.inputs">
				<div v-for="(formifyInput, key) in formify.inputs" :key="key">
					<FormifyInput :model-value="formifyInput" :field-name="`${key}`" class="mb-5" />
				</div>
			</template>

			<template v-if="formify.forms">
				<FormifyForm v-for="(form, key) in formify.forms" :key="key" :model-value="form" :form-name="`${key}`" />
			</template>
		</v-card-text>

		<v-divider />

		<v-card-actions>
			<v-spacer />
			<v-btn @click="submitForm" text="Submit" class="text-capitalize bg-blue-darken-1" size="small" />
		</v-card-actions>
	</v-card>
</template>

<script setup lang="ts">
const { handleSubmit, resetForm, setFieldValue, setValues } = useForm({
	initialValues: {
		first_name: 'Mashiyyat',
		address: {
			id: 1,
			city: 'San Jose del Monte',
			municipality: 'Bulacan',
			lot: 39,
			block: 35,
		},
	},
})

const formify = defineModel<Formify>({ required: true })

const submitForm = handleSubmit((value) => {
	console.log(value)
})
</script>
