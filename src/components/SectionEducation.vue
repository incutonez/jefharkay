<script setup lang="ts">
import { EducationRoute } from "@/router.ts";
</script>

<template>
	<article
		:id="EducationRoute"
		class="flex flex-col space-y-4"
	>
		<h1 class="section-title mb-2">
			Education
		</h1>
		<section>
			<div class="font-semibold">
				Bachelor of Computer Science
			</div>
			<div>
				Pennsylvania State University
			</div>
			<div>
				Aug 2006 - May 2010
			</div>
		</section>
		<section>
			<div class="font-semibold">
				4 Postgraduate Classes
			</div>
			<div>
				<span>University of Maryland, Baltimore County</span>
			</div>
			<div>
				Aug 2010 - May 2012
			</div>
		</section>
	</article>
</template>
