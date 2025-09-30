<script setup lang="ts">
import IconEmail from "@/assets/IconEmail.vue";
import IconGitHub from "@/assets/IconGitHub.vue";
import IconLinkedIn from "@/assets/IconLinkedIn.vue";
import IconOnline from "@/assets/IconOnline.vue";
import IconPhone from "@/assets/IconPhone.vue";
import IconPin from "@/assets/IconPin.vue";
</script>

<template>
	<article class="flex justify-between bg-blue-resume p-4 text-white sticky top-0 z-1">
		<section class="flex flex-col">
			<h1 class="text-3xl font-semibold">
				Jef Harkay
			</h1>
			<h2 class="text-xl">
				Senior Software Engineer
			</h2>
		</section>
		<ul>
			<li class="flex items-center space-x-2">
				<IconEmail class="size-5" />
				<a
					href="mailto:jefharkay@gmail.com"
					class="anchor-link"
					target="_blank"
				>jefharkay@gmail.com</a>
			</li>
			<li class="flex items-center space-x-2">
				<IconPhone class="size-5" />
				<span>
					720-252-1193
				</span>
			</li>
			<li class="flex items-center space-x-2">
				<IconPin class="size-5" />
				<span>
					Ashburn, VA
				</span>
			</li>
		</ul>
		<ul>
			<li class="flex items-center space-x-2">
				<IconLinkedIn class="size-5" />
				<a
					href="https://www.linkedin.com/in/jefharkay"
					class="anchor-link"
					target="_blank"
				>linkedin.com/in/jefharkay</a>
			</li>
			<li class="flex items-center space-x-2">
				<IconGitHub class="size-5" />
				<a
					href="https://github.com/incutonez"
					class="anchor-link"
					target="_blank"
				>github.com/incutonez</a>
			</li>
			<li class="flex items-center space-x-2">
				<IconOnline class="size-5 fill-white" />
				<a
					href="https://resume.incutonez.com"
					class="anchor-link"
					target="_blank"
				>Online Resume</a>
			</li>
		</ul>
	</article>
</template>
