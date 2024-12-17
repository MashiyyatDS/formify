<template>
	<UCard :ui="{ footer: 'p-2 sm:p-2', header: 'p-2 sm:p-2' }" class="m-5">
		<template #header>
			<span>Sample Form</span>
		</template>

		<div class="p-1">
			<UStepper ref="stepper" :items="items">
				<template #content="{ item }">
					<span>{{ item }}</span>
				</template>
			</UStepper>

			<div class="flex gap-2 justify-between mt-4">
				<UButton @click="stepper?.prev()" leading-icon="i-lucide-arrow-left" :disabled="!stepper?.hasPrev"> Prev </UButton>

				<div class="flex gap-1">
					<UButton @click="stepper?.next()" v-if="stepper?.hasNext" trailing-icon="i-lucide-arrow-right" label="Next" />

					<UButton @click="stepper?.next()" v-if="!stepper?.hasNext" trailing-icon="material-symbols:save-rounded" label="Save" />
				</div>
			</div>
		</div>

		<template #footer>
			<UButton label="Save" />
		</template>
	</UCard>
</template>

<script setup lang="ts">
//const sampleForm = {
//	inputs: {
//		first_name: {
//			attributes: {
//				label: 'First Name',
//				placeholder: 'Enter your first name.',
//				size: 'lg',
//			},
//			grid: { column: 6 },
//			validations: {
//				rules: 'string_only|required|min:3',
//				messages: {
//					required: 'First name field is required.',
//					min: 'Minimum 3 characters are required',
//					string_only: 'Please avoid using special characters or numbers.',
//				},
//			},
//		},
//		middle_name: {
//			attributes: {
//				label: 'Middle Name',
//				placeholder: 'Enter your Middle Name.',
//				size: 'lg',
//			},
//			grid: { column: 6 },
//			validations: {
//				rules: 'required|min:3',
//				messages: {
//					required: 'Middle Name field is required.',
//					min: 'Minimum 3 characters are required',
//				},
//			},
//		},
//		last_name: {
//			attributes: {
//				label: 'Last Name',
//				placeholder: 'Enter your Last Name.',
//				size: 'lg',
//			},
//			grid: { column: 6 },
//			validations: {
//				rules: 'required|min:3',
//				messages: {
//					required: 'Last Name field is required.',
//					min: 'Minimum 3 characters are required',
//				},
//			},
//		},
//		email: {
//			attributes: {
//				label: 'Email',
//				placeholder: 'Enter your Email.',
//				size: 'lg',
//			},
//			grid: { column: 6 },
//			validations: {
//				rules: 'required|min:3|email',
//				messages: {
//					required: 'Email field is required.',
//					min: 'Minimum 3 characters are required',
//					email: 'Please provide a valid email address.',
//				},
//			},
//		},
//	},
//	//initialValue: {
//	//	id: 1,
//	//	first_name: 'Mashiyyat',
//	//	middle_name: 'Villasenor',
//	//	last_name: 'Delos Santos',
//	//	email: 'delossantos.mash@gmail.com',
//	//},
//}

//function submitForm(data: User) {
//	console.log(data)
//}

//const colorMode = useColorMode()
//const isDark = computed({
//	get() {
//		return colorMode.value === 'dark'
//	},
//	set() {
//		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
//	},
//})

const items = ref([
	{
		title: 'Form',
		description: 'Add your address here',
		icon: 'i-lucide-house',
	},
	{
		title: 'Attachments',
		description: 'Add attachments inside your form.',
		icon: 'material-symbols:upload-file-rounded',
	},
	{
		title: 'Confirmation',
		description: 'Form Confirmation.',
		icon: 'material-symbols:list-alt-check-rounded',
	},
])
const stepper = useTemplateRef('stepper')

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
