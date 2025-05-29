<script setup lang="ts">
import BaseLink from "@/components/BaseLink.vue";
</script>

<template>
	<article class="flex flex-col gap-2">
		<h2 class="section-title">
			Tech Skills
		</h2>
		<ul class="skill-list">
			<li>Vue 3+</li>
			<li>React 19+</li>
			<li>
				<BaseLink
					text="Ext JS"
					href="https://www.sencha.com/products/extjs/"
					:show-cls="false"
				/>
			</li>
			<li>
				<BaseLink
					text="Redux"
					href="https://redux.js.org/"
					:show-cls="false"
				/>
			</li>
			<li>
				<BaseLink
					text="TanStack"
					href="https://tanstack.com/"
					:show-cls="false"
				/>
			</li>
			<li>TypeScript 5+</li>
			<li>JSON</li>
			<li>ECMAScript 6+</li>
			<li>Tailwind</li>
			<li>PrimeVue</li>
			<li>
				<BaseLink
					text="Reka UI"
					:show-cls="false"
					href="https://reka-ui.com/docs/overview/introduction"
				/>
			</li>
			<li>HTML</li>
			<li>Auth0</li>
			<li>
				<BaseLink
					text="OpenAPI"
					href="https://openapi-generator.tech/docs/generators/typescript-axios"
					:show-cls="false"
				/>
			</li>
			<li>Node.js</li>
			<li>NestJS</li>
			<li>C#</li>
			<li>Sequelize</li>
			<li>GraphQL</li>
			<li>SQL</li>
			<li>REST</li>
			<li>CRUD</li>
			<li>Data Modeling</li>
			<li>AWS</li>
			<li>OOP</li>
			<li>Rapid Prototyping</li>
			<li>Web Sockets</li>
		</ul>
	</article>
</template>
