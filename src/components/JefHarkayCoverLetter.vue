<script setup lang="ts">
import BaseLink from "@/components/BaseLink.vue";
</script>

<template>
	<article class="space-y-4 bg-white">
		<p>
			Hello there!
		</p>
		<p contenteditable="true">
			I'm Jef — a passionate Senior Software Engineer with a love for building quality software, mentoring others, and continuously learning new technologies. Thank you for considering my application!
		</p>
		<p>
			My experience is rooted in modern JavaScript and TypeScript ecosystems, particularly with Vue 3 over my last three roles. However, I thrive on exploring new frameworks, including React, Angular, Svelte, and more. I enjoy full-stack development, and I’m committed to creating scalable, maintainable applications through best practices and lively collaboration on code reviews.
		</p>
		<p>
			Over the past year, I dedicated myself to advancing my skills and exploring new technologies. I built several projects, including:
		</p>
		<ul class="list-disc ml-4">
			<li>
				<BaseLink
					href="https://github.com/incutonez/ecommerce"
					text="E-commerce app"
				/>
				- built from scratch using React 19, NestJS, and SQLite; deployed to AWS EC2.
			</li>
			<li>
				<BaseLink
					href="https://incutonez.github.io/satisfactory-manager/#/items"
					text="Satisfactory Manager"
				/> - a React-based tool for managing game inputs and outputs.
			</li>
			<li>
				<BaseLink
					text="Custom scaffolding CLI"
					href="https://github.com/incutonez/configs/tree/main/scaffold"
				/> - spins up a full-stack project (API, OpenAPI spec, UI) in either React or Vue, with automated configurations for ESLint, GitHub workflows, Husky, and semantic versioning.
			</li>
			<li>
				<BaseLink
					text="Fabled Basin"
					href="https://incutonez.github.io/fabled-basin/#/"
				/> - a tribute to The Legend of Zelda, built as a browser-based RPG tech demo.
			</li>
		</ul>
		<p>
			I’m looking for a collaborative, lighthearted team where I can contribute meaningful input, mentor junior developers, and help tackle ambitious projects - whether by building new applications or refactoring existing ones for long-term success.
		</p>
		<p>
			I would love the opportunity to bring my passion for high-quality code and creative problem-solving to your team. Thank you again for your time and consideration, and I look forward to the possibility of speaking with you soon.
		</p>
		<p class="mt-12">
			Jef Harkay
		</p>
	</article>
</template>
