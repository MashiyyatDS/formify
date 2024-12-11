// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	modules: ['@vee-validate/nuxt', '@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts'],
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
	ssr: false,
	fonts: {
		families: [
			// do not resolve this font with any provider from `@nuxt/fonts`
			{ name: 'Custom Font', provider: 'none' },
			// only resolve this font with the `google` provider
			{ name: 'My Font Family', provider: 'google' },
		],
	},
})
