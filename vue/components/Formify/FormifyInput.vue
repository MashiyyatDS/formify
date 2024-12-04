<template>
	<v-text-field
		v-bind="formifyInput.attributes"
		v-model="value"
		density="compact"
		variant="outlined"
		:hide-details="!errorMessage"
		:error-messages="errorMessage"
		color="blue-darken-1" />
</template>

<script setup lang="ts">
import { defineRule, configure } from 'vee-validate'
import { required, min } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

const props = withDefaults(defineProps<{ fieldName: string }>(), {})

const formifyInput = defineModel<FormifyInput>({ required: true })

configure({
	generateMessage: localize('en', {
		fields: {
			...(formifyInput.value.validations?.messages && {
				[props.fieldName]: formifyInput.value.validations?.messages,
			}),
		},
	}),
})

defineRule('required', required)
defineRule('min', min)

const { value, errorMessage } = useField(() => props.fieldName, formifyInput.value.validations?.rules)
</script>
