<template>
	<UFormGroup :label="formifyInput.attributes.label" required :error="errorMessage">
		<template #label>
			<span class="text-xs font-sans">{{ formifyInput.attributes.label }}</span>
		</template>

		<UInput
			v-bind="formifyInput.attributes"
			v-model="value"
			:trailing-icon="errorMessage ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
	</UFormGroup>
</template>

<script setup lang="ts">
import { defineRule, configure } from 'vee-validate'
import { required, min, email } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

const props = withDefaults(defineProps<{ fieldName: string }>(), {})

const emit = defineEmits(['valueUpdated'])

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
defineRule('email', email)
defineRule('string_only', (value: any) => /\p{L}/u.test(value))

const { value, errorMessage, checked } = useField(() => props.fieldName, formifyInput.value.validations?.rules)

watch(value, () => emit('valueUpdated', props.fieldName, value))
</script>
