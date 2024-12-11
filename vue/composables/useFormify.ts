export default function (formify: Formify, id: string) {
	//const { handleSubmit, resetForm, setFieldValue, setValues } = useForm({
	//	name: id,
	//	initialValues: {
	//		first_name: 'Mashiyyat',
	//		address: {
	//			id: 1,
	//			city: 'San Jose del Monte',
	//			municipality: 'Bulacan',
	//			lot: 39,
	//			block: 35,
	//		},
	//	},
	//})

	const { handleSubmit, resetForm, setFieldValue, setValues } = useForm({})

	const submitForm = handleSubmit((value) => {
		console.log(value)
	})

	const setFormValue = (formValue: any) => {
		console.log(formValue)
	}

	return {
		submitForm,
		setFormValue,
	}
}
