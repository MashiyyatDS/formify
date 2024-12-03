<template>
	<h1>Working</h1>

	<input type="text" placeholder="Enter your first name" v-model="value" />
	<span>{{ errorMessage }}</span>
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
const { errorMessage, value } = useField('first_name', 'required')

console.log(parameter)
</script>
