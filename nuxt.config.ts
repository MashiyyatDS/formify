// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@vee-validate/nuxt', '@nuxt/eslint'],
	veeValidate: {
		autoImports: true,
	},
	imports: {
		dirs: ['./types', './composables'],
		autoImport: true,
	},
	srcDir: './vue',
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ['~/assets/css/main.css'],
})
