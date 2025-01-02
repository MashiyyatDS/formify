<template>
	<UModal :dismissible="false" :title="title">
		<template #body>
			<UStepper ref="stepper" :items="items" disabled>
				<template #content="{ item }">
					<UCard v-if="item.title === 'Form'" :ui="{ body: 'p-2 sm:p-2' }">
						<UInput class="w-full" placeholder="Enter your first name here..." />
					</UCard>

					<UCard v-if="item.title === 'Attachments'" :ui="{ body: 'p-2 sm:p-2' }">
						<UInput type="file" placeholder="Add file attachments" class="w-full" multiple />
					</UCard>

					<UCard v-if="item.title === 'Confirmation'" :ui="{ body: 'p-2 sm:p-2' }">
						<span>Confirmation here...</span>
					</UCard>
				</template>
			</UStepper>
		</template>

		<template #footer>
			<div class="flex gap-2 justify-between w-full">
				<div>
					<UButton @click="stepper?.prev()" v-if="stepper?.hasPrev" leading-icon="i-lucide-arrow-left"> Prev </UButton>
				</div>

				<div class="flex gap-1 self-end">
					<UButton @click="stepper?.next()" v-if="stepper?.hasNext" trailing-icon="i-lucide-arrow-right" label="Next" class="self-end" />

					<UButton
						@click="stepper?.next()"
						v-if="!stepper?.hasNext"
						trailing-icon="material-symbols:save-rounded"
						label="Save"
						class="self-end" />
				</div>
			</div>
		</template>
	</UModal>
</template>

<script setup lang="ts">
const modal = useModal()

const title = ref('sample title')

const items = ref([
	{
		title: 'Form',
		icon: 'i-lucide-house',
	},
	{
		title: 'Attachments',
		icon: 'material-symbols:upload-file-rounded',
	},
	{
		title: 'Confirmation',
		icon: 'material-symbols:list-alt-check-rounded',
	},
])

const stepper = useTemplateRef('stepper')
</script>
