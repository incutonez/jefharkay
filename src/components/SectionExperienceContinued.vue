<script setup lang="ts">
import SectionJobDescription from "@/components/SectionJobDescription.vue";

const IntrinsiQTasks = [
	"Delivered MVP of a patient search tool three months ahead of schedule",
	"Added virtual scrolling to large, performance-challenged data tables",
	"Created core components from scratch and by wrapping Kendo UI components",
	"Designed a micro front-end architecture for shared modules",
	"Migrated core components to a reusable NPM package",
];
const PureTasks = [
	"Led financial reporting team and co-led another engineering team",
	"Authored engineering guidelines to streamline onboarding",
	"Developed core UI components package for onshore and offshore team",
	"Collaborated with and provided feedback to product team on mockups for upcoming features",
	"Mentored junior and offshore developers through code reviews and coaching",
];
const WideOrbitTasks = ["Wrote technical design documents and best practice guidelines", "Shared reusable Ext JS components across multiple teams", "Filed over 200 technical issues with Sencha Support and patched over 100 bugs in the framework"];
const VitalWareTasks = ["Organized and led UI/UX architecture team", "Prototyped and delivered urgent product MVPs based on client feedback", "Designed mockups and collaborated with product managers"];
const WideOrbit2Tasks = ["Optimized Ext JS Grid component for high-volume data sets", "Led UI efforts for sell-side ad platform development"];
const TimeWarnerTasks = ["Migrated UIs from Ruby on Rails and jQuery to Ext JS for better performance", "Built web application to replace manual tracking system using shared Excel file"];
const DoDTasks = ["Held TS/SCI security clearance throughout tenure", "Completed rotational assignments across multiple orgs, adapting quickly to new teams and missions every 8 months", "Passed four post-graduate computer science courses at UMBC as part of development requirements"];
</script>

<template>
	<article class="flex flex-col space-y-4">
		<!-- Add a page break after this element because the print would cut it off improperly, and it just looks unprofessional -->
		<SectionJobDescription
			date-start="May 2022"
			project="Vue 3, TypeScript, Tailwind, C#"
			company="IntrinsiQ"
			location="Remote"
			industry="Health Tech"
			position="Software Developer (contractor)"
			date-end="Dec 2022"
			class="print:break-after-page"
			:tasks="IntrinsiQTasks"
		/>
		<SectionJobDescription
			date-start="Aug 2021"
			project="Vue 3, TypeScript, GraphQL, Node.js"
			company="PURE Property Management"
			location="Remote"
			industry="Property Tech"
			position="SSE/Tech Lead"
			date-end="Apr 2022"
			class="print:pt-4"
			:tasks="PureTasks"
		/>
		<SectionJobDescription
			date-start="Apr 2018"
			project="Ext JS, C#"
			company="WideOrbit"
			location="Remote"
			industry="Advertising Tech"
			position="Senior Software Engineer"
			date-end="Apr 2021"
			:tasks="WideOrbitTasks"
		/>
		<SectionJobDescription
			date-start="May 2017"
			project="Ext JS, GraphQL, ColdFusion"
			company="VitalWare"
			location="Remote"
			industry="Health Tech"
			position="Web Developer"
			date-end="Mar 2018"
			:tasks="VitalWareTasks"
		/>
		<SectionJobDescription
			date-start="Apr 2015"
			project="Ext JS, C#"
			company="WideOrbit"
			location="Lynnwood, WA"
			industry="Advertising Tech"
			position="UI Contractor"
			date-end="Feb 2017"
			:tasks="WideOrbit2Tasks"
		/>
		<SectionJobDescription
			date-start="Aug 2013"
			project="Ext JS, Node.js, Ruby, Web Sockets"
			company="Time Warner Cable"
			location="Broomfield, CO"
			industry="Communications Tech"
			position="UI Contractor"
			date-end="Mar 2015"
			:tasks="TimeWarnerTasks"
		/>
		<SectionJobDescription
			date-start="Jun 2010"
			project="Ext JS, jQuery, Perl, AngularJS"
			company="Dept. of Defense"
			location="Fort Meade, MD"
			industry="Classified Tech"
			position="Computer Scientist"
			date-end="Jul 2013"
			multiple-projects
			:tasks="DoDTasks"
		/>
	</article>
</template>
