<template>
	<div v-bind="attributes">
		<h1>{{ title }}</h1>

		<h1>{{ description }}</h1>

		<h2>{{ caption }}</h2>

		<UInput v-model="description" />

		<UButton :label="active ? 'Active' : 'Inactive'" />
	</div>
</template>

<script setup lang="ts">
const title = ref('Sample Dynamic Component')

const description = defineModel<string>('description', { required: true })

const caption = defineModel<string>('caption', { required: true })

const attributes = reactive({})

const active = ref(false)
</script>
