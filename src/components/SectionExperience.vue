<script setup lang="ts">
import BaseLink from "@/components/BaseLink.vue";
import SectionJobDescription from "@/components/SectionJobDescription.vue";
import { ExperienceRoute } from "@/router.ts";

const QADTasks = [
	"Boosted customer efficiency by adding multi-upload for entity management",
	"Increased developer velocity by designing reusable page layouts, inputs, and data tables",
	"Led biweekly web forums to discuss technical decisions and team roadblocks",
	"Introduced a local state management approach using Vue's provide/inject in place of Pinia",
	"Maintained NestJS BFF endpoints, E2E tests, data mappers, and OpenAPI specifications",
];
</script>

<template>
	<article
		:id="ExperienceRoute"
		class="flex flex-col"
	>
		<h1 class="section-title">
			Experience
		</h1>
		<section class="flex flex-col space-y-3">
			<SectionJobDescription
				date-start="Mar 2024"
				project="Vue 3, React 19, TypeScript, Tailwind, NestJS"
				company="Personal Growth"
				location="Remote"
				industry="Personal Tech"
				position="Senior Web Engineer"
				date-end="Present"
				multiple-projects
			>
				<template #tasks>
					<li>
						Built <BaseLink
							href="https://incutonez.github.io/satisfactory-manager/#/items"
							text="Satisfactory Manager"
						/> using React, TanStack Table and Router, and Aria Components
					</li>
					<li>
						Developed a sample <BaseLink
							href="https://github.com/incutonez/ecommerce"
							text="e-commerce application"
						/> using React, NestJS, and SQLite
					</li>
					<li>
						Designed a micro-architecture <BaseLink
							href="https://github.com/incutonez/configs/tree/main/scaffold"
							text="scaffolding script"
						/> to improve productivity for creating greenfield applications
					</li>
					<li>
						Created and deployed a <BaseLink
							href="https://github.com/incutonez/core-ui"
							text="Core UI package"
						/> for personal Vue projects
					</li>
					<li>
						Prototyped a <BaseLink
							href="https://incutonez.github.io/fabled-basin/#/"
							text="Legend of Zelda"
						/> clone using Phaser 3 and TypeScript
					</li>
					<li>
						Built a personal <BaseLink
							href="https://github.com/incutonez/eslint-plugin"
							text="ESLint Plugin"
						/> to enforce custom code styling preferences
					</li>
					<li>Explored ideas for launching a business to improve web quality standards</li>
				</template>
			</SectionJobDescription>
			<SectionJobDescription
				date-start="Mar 2023"
				project="Vue 3, TypeScript, Tailwind, Pinia, NestJS"
				company="QAD Redzone"
				location="Remote"
				industry="Manufacturing Tech"
				position="Senior Web Engineer"
				date-end="Feb 2024"
				:tasks="QADTasks"
			/>
		</section>
	</article>
</template>
