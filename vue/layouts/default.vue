<template>
	<UApp>
		<div class="bg-[var(--ui-bg)]" vaul-drawer-wrapper>
			<aside
				id="default-sidebar"
				class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full border-r dark:border-gray-600"
				:class="`sm:translate-x-0`"
				aria-label="Sidebar">
				<div class="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<UCard class="rounded-none border-0 h-[100%] m-0" :ui="{ body: 'p-2 sm:p-2', header: 'p-1 sm:p-1' }">
						<template #header>
							<div class="flex flex-row items-center justify-between">
								<span class="font-sans font-medium">Formify Application</span>

								<UButton @click="isDark = !isDark" :icon="isDark ? 'material-symbols:dark-mode' : 'material-symbols:sunny-rounded'" />
							</div>
						</template>

						<UNavigationMenu orientation="vertical" :items="items" class="" />
					</UCard>
				</div>
			</aside>

			<NuxtLoadingIndicator />

			<div class="sm:ml-64">
				<UCard class="rounded-none h-10 bg-gray-800" :ui="{ header: 'p-1 sm:p-1' }">
					<template #header>
						<UDrawer title="Formify Application" description="delossantos.mashiyyat@gmail.com" should-scale-background>
							<UButton @click="isOpen = true" icon="mdi-menu" class="sm:hidden" />

							<template #body>
								<UNavigationMenu orientation="vertical" :items="items" class="" />
							</template>
						</UDrawer>
					</template>
				</UCard>

				<NuxtPage />
			</div>
		</div>
	</UApp>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const links = [
	[
		{
			label: 'Home',
			icon: 'mdi-home',
			to: '/',
		},
		{
			label: 'Dashboard',
			icon: 'material-symbols:bar-chart',
			to: '/dashboard',
		},
		{
			label: 'Products',
			icon: 'icon-park-outline:ad-product',
			to: '/products',
		},
		{
			label: 'Inventories',
			icon: 'material-symbols:home-storage',
			to: '/inventories',
		},
		{
			label: 'Users',
			icon: 'ic:round-people-alt',
			to: '/users',
		},
		{
			label: 'Settings',
			icon: 'material-symbols:settings-rounded',
			to: '/settings',
		},
	],
]

const items = ref([
	[
		{
			label: 'Dashboard',
			icon: 'i-simple-icons-github',
			badge: '3.8k',
			to: 'https://github.com/nuxt/ui',
			target: '_blank',
		},
	],
	[
		{
			label: 'Guide',
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
			label: 'Composables',
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
			label: 'Components',
			icon: 'i-lucide-box',
			defaultOpen: true,
			children: [
				{
					label: 'Link',
					icon: 'i-lucide-file-text',
					description: 'Use NuxtLink with superpowers.',
					to: '/products',
				},
				{
					label: 'Modal',
					icon: 'i-lucide-file-text',
					description: 'Display a modal within your application.',
					to: '/products',
				},
				{
					label: 'NavigationMenu',
					icon: 'i-lucide-file-text',
					description: 'Display a list of links.',
					to: '/products',
				},
				{
					label: 'Pagination',
					icon: 'i-lucide-file-text',
					description: 'Display a list of pages.',
					to: '/products',
				},
				{
					label: 'Popover',
					icon: 'i-lucide-file-text',
					description: 'Display a non-modal dialog that floats around a trigger element.',
					to: '/products',
				},
				{
					label: 'Progress',
					icon: 'i-lucide-file-text',
					description: 'Show a horizontal bar to indicate task progression.',
					to: '/products',
				},
			],
		},
	],
	[
		{
			label: 'GitHub',
			icon: 'i-simple-icons-github',
			badge: '3.8k',
			to: 'https://github.com/nuxt/ui',
			target: '_blank',
		},
		{
			label: 'Help',
			icon: 'i-lucide-circle-help',
			disabled: true,
		},
	],
])

const colorMode = useColorMode()
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	},
})
</script>
