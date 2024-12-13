export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	modules: ['@vee-validate/nuxt', '@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts'],
	veeValidate: {
		autoImports: true,
	},
	imports: {
		dirs: ['./types/*/*.ts', './composables'],
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
	ssr: false,
	fonts: {
		families: [
			{ name: 'Custom Font', provider: 'none' },
			{ name: 'My Font Family', provider: 'google' },
		],
	},
})
