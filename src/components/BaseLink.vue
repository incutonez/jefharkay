<script setup lang="ts">
import { computed } from "vue";

interface IBaseLink {
	text: string;
	showCls?: boolean;
}

const { text, showCls = true } = defineProps<IBaseLink>();
const cls = computed(() => {
	return {
		["text-blue-700 underline"]: showCls,
	};
});
</script>

<template>
	<a
		class="anchor-link"
		:class="cls"
		target="_blank"
	>
		{{ text }}
	</a>
</template>
