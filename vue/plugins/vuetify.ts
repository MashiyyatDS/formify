import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
/**
 * Lab Components
 *
 * */
import { VTimePicker } from 'vuetify/labs/VTimePicker'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { VPullToRefresh } from 'vuetify/labs/VPullToRefresh'

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		components: {
			...components,
			VTimePicker,
			VNumberInput,
			VDateInput,
			VPullToRefresh,
		},
		directives,
	})

	app.vueApp.use(vuetify)
})
