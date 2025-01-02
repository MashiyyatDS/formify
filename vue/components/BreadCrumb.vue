<template>
	<UBreadcrumb :items="bcItems" :ui="{ root: 'm-3' }" />
</template>

<script setup lang="ts">
const bcItems = ref([
	{
		label: 'Home',
		//icon: 'i-lucide-house',
	},
	{
		label: 'Components',
		//icon: 'i-lucide-box',
		to: '/components',
	},
	{
		label: 'Breadcrumb',
		icon: 'i-lucide-link',
		//to: '/components/breadcrumb',
	},
])
</script>
