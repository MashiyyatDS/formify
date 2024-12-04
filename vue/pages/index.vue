<template>
	<Formify :model-value="sampleForm" />
</template>

<script setup lang="ts">
const sampleForm: Formify<User> = {
	inputs: {
		first_name: {
			attributes: {
				label: 'First Name',
				placeholder: 'Enter your first name.',
			},
			grid: { column: 6 },
			validations: {
				rules: 'required|min:2',
				messages: {
					required: 'First name field is required.',
					min: 'Minimum 3 characters are required',
				},
			},
		},
		middle_name: {
			attributes: {
				label: 'Middle Name',
				placeholder: 'Enter your Middle Name.',
			},
			grid: { column: 6 },
			validations: {
				rules: 'required|min:2',
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
			},
			grid: { column: 6 },
			validations: {
				rules: 'required|min:2',
				messages: {
					required: 'Last Name field is required.',
					min: 'Minimum 3 characters are required',
				},
			},
		},
	},
	forms: {
		address: {
			inputs: {
				city: {
					attributes: {
						label: 'City',
						placeholder: 'Enter your City.',
					},
					grid: { column: 6 },
					validations: {
						rules: 'required|min:2',
						messages: {
							required: 'City field is required.',
							min: 'Minimum 3 characters are required',
						},
					},
				},
				municipality: {
					attributes: {
						label: 'Municipality',
						placeholder: 'Enter your Municipality.',
					},
					grid: { column: 6 },
					validations: {
						rules: 'required|min:2',
						messages: {
							required: 'Municipality field is required.',
							min: 'Minimum 3 characters are required',
						},
					},
				},
				lot: {
					attributes: {
						label: 'Lot',
						placeholder: 'Enter your Lot.',
					},
					grid: { column: 6 },
					validations: {
						rules: 'required|min:2',
						messages: {
							required: 'Lot field is required.',
							min: 'Minimum 3 characters are required',
						},
					},
				},
				block: {
					attributes: {
						label: 'Block',
						placeholder: 'Enter your Block.',
					},
					grid: { column: 6 },
					validations: {
						rules: 'required|min:2',
						messages: {
							required: 'Block field is required.',
							min: 'Minimum 3 characters are required',
						},
					},
				},
			},
		},
	},
}
</script>
