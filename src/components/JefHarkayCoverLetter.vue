<script setup lang="ts">
import BaseLink from "@/components/BaseLink.vue";
</script>

<template>
  <article class="space-y-4 bg-white">
    <p>
      Hello there!
    </p>
    <p contenteditable="true">
      I'm Jef, a passionate Senior Software Engineer with a love for building quality software, mentoring others, and continuously learning new technologies. Thank you for considering my application!
    </p>
    <p>
      My experience is rooted in modern JavaScript and TypeScript ecosystems, mostly with Vue 3. However, I would love the opportunity of exploring frameworks like React, Angular, or Svelte in a production setting. I enjoy full-stack development, and I’m committed to creating scalable, maintainable applications through best practices and lively collaboration on code reviews.
    </p>
    <p>
      My time at IntrinsiQ has been split between 3 initiatives.  The 1st initiative was to create a generic survey system, but use it specifically for a cancer research survey to generate $4MM in revenue.  The team was an API developer and myself as the UI developer.  Incredibly fun little project that came with its own challenges for trying to make it extensible.
    </p>
    <p>
      The 2nd initiative was creating a data contract/document management system using <BaseLink
        text="JSON Schema"
        href="https://json-schema.org/"
      /> as a framework.  We basically wanted a system like <BaseLink
        text="Strapi"
        href="https://strapi.io/"
      />, but did not want to pay for it, and only needed about 20% of the functionality.  Basically a CMS that we could eventually hand over to Product Management, so they could create and maintain surveys of their own.  Our development team also had the need of being able to store configuration values in a more dynamic fashion than through SQL Server.  Same development team as the survey system, which required lots of architecture and experimentation to get it just right.
    </p>
    <p>
      The 3rd initiative was migrating an old ASP.NET to Vue 3 and .NET (Core).  The tool allowed practices to manage insurers, medications, procedures, and protocols so they could build reports and analyze the cost of drugs to generate a more accurate patient bill estimate.  Sounds like a simple CRUD app, but it contained so much nuance that it quickly turned into a nightmare scenario that I thrived in.  Nightmare because of the DB's lack of proper foreign keys, validation gotchas, hidden UI functionality, and so on.  Most days felt like being Indiana Jones on some new archaeological dig through old ASP.NET code.  This went on for over a year and required a lot of Joint Application Development meetings between product, design, and development.
    </p>
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
