<template>
	<aside
		id="default-sidebar"
		class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full border-r dark:border-gray-600"
		:class="`sm:translate-x-0`"
		aria-label="Sidebar">
		<div class="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
			<UCard
				class="flex flex-col flex-1 rounded-none border-0 h-[100%]"
				:ui="{
					body: { base: 'flex-1 dark:text-white', padding: 'px-2', background: 'dark:bg-gray-800' },
					divide: 'divide-y divide-gray-100 dark:divide-gray-700',
					header: { base: 'dark:text-white', padding: 'p-3 sm:p-3', background: 'dark:bg-gray-800' },
				}">
				<template #header>
					<div class="flex flex-row items-center justify-between">
						<span class="font-sans font-medium">Formify Application</span>

						<UButton @click="isDark = !isDark" :label="useColorMode().value" class="mt-3 ml-3" />
					</div>
				</template>

				<UVerticalNavigation :links="links" :ui="{ base: 'mb-2 h-[35px] font-sans rounded-lg' }">
					<template #default="{ link }">
						<span class="group-hover:text-primary relative">{{ link.label }}</span>
					</template>
				</UVerticalNavigation>
			</UCard>
		</div>
	</aside>

	<NuxtLoadingIndicator />

	<div class="sm:ml-64">
		<UCard class="rounded-none bg-gray-800" :ui="{ header: { padding: 'p-2 sm:p-2' } }">
			<template #header>
				<UButton @click="isOpen = true" icon="mdi-menu" />
			</template>
		</UCard>
		<button
			data-drawer-target="default-sidebar"
			data-drawer-toggle="default-sidebar"
			aria-controls="default-sidebar"
			type="button"
			class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
			<span class="sr-only">Open sidebar</span>
			<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path
					clip-rule="evenodd"
					fill-rule="evenodd"
					d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
			</svg>
		</button>

		<NuxtPage />
	</div>
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
