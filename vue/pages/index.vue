<template>
	<h1>Working...</h1>
</template>

<script setup lang="ts">
import { defineRule, configure } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

const sampleVariable = ref<number>(10000)

const parameter = useFormify('sampleForm')

defineRule('required', required)
configure({
	generateMessage: localize('en', {
		fields: {
			first_name: {
				required: 'Please enter a valid first name.',
			},
		},
	}),
})

const { handleSubmit } = useForm({})
const { errorMessage, value: firstName } = useField<string>('first_name', 'required')
const { errorMessage: cityErrorMessage, value: city } = useField('city', 'required')

const submitForm = handleSubmit((value) => {
	console.log(value)
})

const cities = ref([
	{ name: 'New York', code: 'NY' },
	{ name: 'Rome', code: 'RM' },
	{ name: 'London', code: 'LDN' },
	{ name: 'Istanbul', code: 'IST' },
	{ name: 'Paris', code: 'PRS' },
])
</script>
