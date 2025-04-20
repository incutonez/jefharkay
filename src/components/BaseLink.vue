<script setup lang="ts">
interface IBaseLink {
	text: string;
}

defineProps<IBaseLink>();
</script>

<template>
	<a
		class="anchor-link underline text-blue-700"
		target="_blank"
	>
		{{ text }}
	</a>
</template>
