<template>
	<UApp>
		<div class="bg-[var(--ui-bg)]" vaul-drawer-wrapper>
			<aside
				id="default-sidebar"
				class="fixed top-0 left-0 z-40 w-70 h-screen transition-transform -translate-x-full border-r border-r-gray-200 dark:border-r-gray-600"
				:class="`sm:translate-x-0`"
				aria-label="Sidebar">
				<div class="overflow-y-auto" style="height: 100vh">
					<UCard class="rounded-none h-[100%] m-0" :ui="{ body: 'p-2 sm:p-2', header: 'p-1 sm:p-1' }">
						<template #header>
							<div class="flex flex-row items-center justify-between">
								<span class="font-sans font-medium">Formify Application</span>

								<UButton @click="isDark = !isDark" :icon="isDark ? 'material-symbols:dark-mode' : 'material-symbols:sunny-rounded'" />
							</div>
						</template>

						<UNavigationMenu orientation="vertical" :items="items" class="cursor-pointer" />
					</UCard>
				</div>
			</aside>

			<NuxtLoadingIndicator />

			<div class="sm:ml-70">
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

				<BreadCrumb />

				<NuxtPage />
			</div>
		</div>
	</UApp>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const items = navigationStore().navigation

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

<style></style>
