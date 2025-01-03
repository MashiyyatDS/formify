<template>
	<div>
		<Dialog />

		<UButton @click="useDialog()" label="Test Dialog" />

		<DataForm :data="formPayload">
			<template #header="{ user }">
				<small>
					<pre>{{ user }}</pre>
				</small>
			</template>
		</DataForm>
	</div>
</template>

<script setup lang="ts">
import type { User } from '~/types/schema'

const formPayload = reactive({
	first_name: 'Mashiyyat',
}) as User

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
