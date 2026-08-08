<script setup lang="ts">
import { EducationRoute } from "@/router.ts";
</script>

<template>
  <article
    :id="EducationRoute"
    class="flex flex-col"
  >
    <h1 class="section-title mb-2">
      Education
    </h1>
    <section class="flex flex-col gap-4 md:flex-row md:gap-16">
      <div class="flex flex-col">
        <span class="font-semibold">Bachelor of Computer Science</span>
        <span>Pennsylvania State University</span>
        <span>Aug 2006 - May 2010</span>
      </div>
      <div class="flex flex-col">
        <span class="font-semibold">4 Postgraduate Classes</span>
        <span>University of Maryland, Baltimore County</span>
        <span>Aug 2010 - May 2012</span>
      </div>
    </section>
  </article>
</template>
