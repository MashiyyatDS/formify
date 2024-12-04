export default function (formify?: Formify) {
	const submitForm = () => {
		console.log('Working...')
	}

	const setFormValue = (formValue: any) => {
		console.log(formValue)
	}

	return {
		submitForm,
		setFormValue,
	}
}
