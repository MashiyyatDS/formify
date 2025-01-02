<template>
	<UModal v-model:open="open" title="Sample Modal" description="This is a sample modal..." :prevent-close="true" :ui="{ close: 'cursor-pointer' }">
		<template #body>
			<UCard>
				<div class="p-1">
					<span>{{ description }}</span>
				</div>
				<template #footer>
					<UButton :label="open ? 'Active' : 'Inactive'" :disabled="!open" />
				</template>
			</UCard>
		</template>
	</UModal>
</template>

<script setup lang="ts">
const title = ref('Sample Modal')

const description = ref('Modal Description')

const open = ref(false)

defineExpose({
	description,
	open,
})
</script>
