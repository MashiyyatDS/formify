export const navigationStore = defineStore('navigation', {
	state: () => ({
		activated: false,
		navigation: [
			[
				{
					label: 'Dashboard',
					icon: 'material-symbols:space-dashboard-rounded',
					badge: '3.8k',
					to: '/dashboard',
				},
			],
			[
				{
					label: 'Products',
					icon: 'i-lucide-book-open',
					defaultOpen: true,
					children: [
						{
							label: 'Introduction',
							description: 'Fully styled and customizable components for Nuxt.',
							icon: 'i-lucide-house',
							to: '/',
						},
						{
							label: 'Installation',
							description: 'Learn how to install and configure Nuxt UI in your application.',
							icon: 'i-lucide-cloud-download',
						},
						{
							label: 'Icons',
							icon: 'i-lucide-smile',
							description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
						},
						{
							label: 'Colors',
							icon: 'i-lucide-swatch-book',
							description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
						},
						{
							label: 'Theme',
							icon: 'i-lucide-cog',
							description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
						},
					],
				},
				{
					label: 'Inventories',
					icon: 'i-lucide-database',
					defaultOpen: true,
					children: [
						{
							label: 'defineShortcuts',
							icon: 'i-lucide-file-text',
							description: 'Define shortcuts for your application.',
							to: '/products',
						},
						{
							label: 'useModal',
							icon: 'i-lucide-file-text',
							description: 'Display a modal within your application.',
							to: '/products',
						},
						{
							label: 'useSlideover',
							icon: 'i-lucide-file-text',
							description: 'Display a slideover within your application.',
							to: '/products',
						},
						{
							label: 'useToast',
							icon: 'i-lucide-file-text',
							description: 'Display a toast within your application.',
							to: '/products',
						},
					],
				},
				{
					label: 'Branches',
					icon: 'i-lucide-box',
					defaultOpen: true,
					children: [
						{
							label: 'Manage Branches',
							icon: 'i-lucide-file-text',
							description: 'Use NuxtLink with superpowers.',
							to: '/products',
						},
						{
							label: 'Branch Groups',
							icon: 'i-lucide-file-text',
							description: 'Display a modal within your application.',
							to: '/products',
						},
						{
							label: 'Branch Types',
							icon: 'i-lucide-file-text',
							description: 'Display a list of links.',
							to: '/products',
						},
					],
				},
			],
			[
				{
					label: 'Accounting',
					icon: 'material-symbols:clinical-notes-rounded',
					defaultOpen: true,
					children: [
						{
							label: 'Finance',
							icon: 'i-lucide-file-text',
							description: 'Use NuxtLink with superpowers.',
						},
						{
							label: 'Account Receivables',
							icon: 'i-lucide-file-text',
							description: 'Display a modal within your application.',
							to: '/products',
						},
						{
							label: 'Account Payable',
							icon: 'i-lucide-file-text',
							description: 'Display a modal within your application.',
							to: '/products',
						},
						{
							label: 'Reports',
							icon: 'i-lucide-file-text',
							description: 'Display a modal within your application.',
							to: '/products',
						},
					],
				},
			],
			[
				{
					label: 'Users',
					icon: 'i-lucide-box',
					defaultOpen: true,
					children: [
						{
							label: 'Manage Users',
							icon: 'i-lucide-file-text',
							description: 'Use NuxtLink with superpowers.',
							to: '/products',
						},
						{
							label: 'Roles and Permissions',
							icon: 'i-lucide-file-text',
							description: 'Display a modal within your application.',
							to: '/products',
						},
					],
				},
				{
					label: 'Configurations',
					icon: 'material-symbols:settings',
					to: 'https://github.com/nuxt/ui',
				},
				{
					label: 'GitHub',
					icon: 'i-simple-icons-github',
					badge: '3.8k',
					to: 'https://github.com/nuxt/ui',
					target: '_blank',
				},
			],
		],
	}),
})
