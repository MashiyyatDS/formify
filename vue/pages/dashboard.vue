<template>
	<div>
		<h1>Dashboard Page</h1>

		<UButton @click="showToast" label="Show toast" class="bg-cyan-300 cursor-pointer" />

		<UAlert
			:ui="{ root: 'm-3 w-[50%]' }"
			title="Heads up!"
			description="You can change the primary color in your app config."
			:avatar="{
				src: 'https://github.com/nuxt.png',
			}" />

		<UInput color="neutral" variant="subtle" placeholder="Search..." type="date" />

		<UCard :ui="{ root: 'm-3 p-0 relative overflow-auto', body: 'p-0 sm:p-0', footer: 'p-2 sm:p-2 flex justify-center', header: 'p-2 sm:p-2' }">
			<template #header>
				<h1>Sample Data Table</h1>
			</template>

			<UTable :data="people" :ui="{ td: 'p-3 sm:p-3' }" />

			<UProgress :ui="{ base: 'rounded-none absolute top-0 h-1' }" />

			<template #footer>
				<UPagination v-model:page="page" :total="100" />
			</template>
		</UCard>
	</div>
</template>

<script setup lang="ts">
const page = ref(1)

function showToast() {
	useToast().add({
		title: 'Show Toast',
		class: 'cursor-pointer',
		ui: {
			progress: 'bg-cyan-300',
		},
	})
}

const people = ref<any[]>([])
await useAsyncData('get-people', async () => {
	const response = await $fetch<any[]>(`https://retoolapi.dev/eLqmml/data`)

	people.value = response
})

definePageMeta({
	layout: 'default',
	pageTransition: {
		name: 'fade',
		mode: 'out-in',
	},
})

useHead({
	title: 'Dashboard',
})
</script>
