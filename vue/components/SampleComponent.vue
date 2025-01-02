<template>
	<UButton @click="executeTest" label="Success" />
</template>

<script lang="ts"></script>

<script setup lang="ts">
import { expect, test } from 'vitest'
const emit = defineEmits({
	success: (): 'working...' => 'working...',
})

function testFunction() {
	console.log('Working')

	emit('success')
}

function executeTest() {
	//test('adds 1 + 2 to equal 3', () => {
	//	expect(testFunction()).toBe(3)
	//})
}
</script>
