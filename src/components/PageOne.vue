<script setup lang="ts">
import SectionExperience from "@/components/SectionExperience.vue";
import SectionSkills from "@/components/SectionSkills.vue";
import SectionSummary from "@/components/SectionSummary.vue";
</script>

<template>
	<article class="space-y-4 flex flex-col">
		<section class="flex space-x-8">
			<SectionSummary class="flex-1" />
			<SectionSkills class="flex-1" />
		</section>
		<SectionExperience />
	</article>
</template>
