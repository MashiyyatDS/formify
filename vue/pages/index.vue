<template>
	<UButton @click="isDark = !isDark" :label="useColorMode().value" class="mt-3 ml-3" />

	<div class="grid grid-cols-12 gap-1 p-3">
		<div class="lg:col-span-4 col-span-12">
			<Formify @form-submitted="submitForm" v-model="sampleForm" />
		</div>
	</div>

	<h1 class="sample-text">Hello World!!!!!!!</h1>
</template>

<script setup lang="ts">
const sampleForm = {
	inputs: {
		first_name: {
			attributes: {
				label: 'First Name',
				placeholder: 'Enter your first name.',
				size: 'lg',
			},
			grid: { column: 6 },
			validations: {
				rules: 'string_only|required|min:3',
				messages: {
					required: 'First name field is required.',
					min: 'Minimum 3 characters are required',
					string_only: 'Please avoid using special characters or numbers.',
				},
			},
		},
		middle_name: {
			attributes: {
				label: 'Middle Name',
				placeholder: 'Enter your Middle Name.',
				size: 'lg',
			},
			grid: { column: 6 },
			validations: {
				rules: 'required|min:3',
				messages: {
					required: 'Middle Name field is required.',
					min: 'Minimum 3 characters are required',
				},
			},
		},
		last_name: {
			attributes: {
				label: 'Last Name',
				placeholder: 'Enter your Last Name.',
				size: 'lg',
			},
			grid: { column: 6 },
			validations: {
				rules: 'required|min:3',
				messages: {
					required: 'Last Name field is required.',
					min: 'Minimum 3 characters are required',
				},
			},
		},
		email: {
			attributes: {
				label: 'Email',
				placeholder: 'Enter your Email.',
				size: 'lg',
			},
			grid: { column: 6 },
			validations: {
				rules: 'required|min:3|email',
				messages: {
					required: 'Email field is required.',
					min: 'Minimum 3 characters are required',
					email: 'Please provide a valid email address.',
				},
			},
		},
	},
	//initialValue: {
	//	id: 1,
	//	first_name: 'Mashiyyat',
	//	middle_name: 'Villasenor',
	//	last_name: 'Delos Santos',
	//	email: 'delossantos.mash@gmail.com',
	//},
}

function submitForm(data: User) {
	console.log(data)
}

const colorMode = useColorMode()
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	},
})

definePageMeta({
	layout: 'default',
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
