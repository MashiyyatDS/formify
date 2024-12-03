// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@vee-validate/nuxt'],
	veeValidate: {
		autoImports: true,
	},
	imports: {
		dirs: ['./types', './composables'],
		autoImport: true,
	},
	srcDir: './vue',
})
