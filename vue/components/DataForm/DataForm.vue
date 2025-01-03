<template>
	<UCard :ui="{ body: 'p-1 sm:p-1' }">
		<slot name="header" v-bind="{ user: data }" />

		<div class="grid grid-cols-12 gap-1">
			<div class="col-span-6">
				<UCard :ui="{ body: 'p-3 sm:p-3 bg-green-600 rounded-lg' }">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam distinctio rem repudiandae. Blanditiis tempore incidunt
						sapiente vero illum magnam facilis, possimus laudantium optio iste earum accusamus quia, assumenda quo.
					</span>
				</UCard>
			</div>

			<div class="col-span-3">
				<UCard :ui="{ body: 'p-3 sm:p-3 bg-blue-600 rounded-lg' }">
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam distinctio rem repudiandae. Blanditiis tempore incidunt
						sapiente vero illum magnam facilis, possimus laudantium optio iste earum accusamus quia, assumenda quo.
					</span>
				</UCard>
			</div>
		</div>
	</UCard>
</template>

<script setup lang="ts" generic="TOption">
const props = withDefaults(defineProps<{ data: TOption }>(), {})

const title = ref('Sample Title')

const emit = defineEmits(['update:title'])

defineSlots<{
	header: (props: { user: TOption }) => void
}>()
</script>
