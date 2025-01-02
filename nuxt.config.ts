export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	modules: ['@vee-validate/nuxt', '@nuxt/eslint', '@nuxt/ui', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
	veeValidate: {
		autoImports: true,
	},
	imports: {
		dirs: ['./types/*/*.ts', './composables', './stores'],
		autoImport: true,
	},
	//pinia: {
	//	storesDirs: ['./vue/stores/**'],
	//},
	srcDir: './vue',
	css: ['~/assets/css/main.css'],
	ssr: false,
})
