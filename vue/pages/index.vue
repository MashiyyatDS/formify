<template>
	<div>
		<Dialog />

		<UButton @click="useDialog()" label="Test Dialog" />

		<DataForm />
	</div>
</template>

<script setup lang="ts">
import { Dialog } from '#components'

definePageMeta({
	layout: 'default',
	pageTransition: {
		name: 'fade',
		mode: 'out-in',
	},
})

useHead({
	title: 'Home',
})
</script>

<style scoped>
.sample-text {
	font-family: 'Poppins', serif;
	font-weight: 400;
	font-style: normal;
}
</style>
