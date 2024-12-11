<template>
	<v-card variant="flat" class="rounded-lg border-thin m-5">
		<v-card-title>Form</v-card-title>

		<v-card-text>
			<template v-if="formify.inputs">
				<div v-for="(formifyInput, key) in formify.inputs" :key="key">
					<FormifyInput :model-value="formifyInput" :field-name="`${formName}.${key}`" class="mb-5" />
				</div>
			</template>

			<template v-if="formify.forms">
				<FormifyForm v-for="(form, key) in formify.forms" :key="key" :model-value="form" :form-name="`${formName}.${key}`" />
			</template>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ formName: string }>(), {})

const formify = defineModel<Formify>({ required: true })
</script>
