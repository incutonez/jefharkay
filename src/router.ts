﻿import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import JefHarkayCoverLetter from "@/components/JefHarkayCoverLetter.vue";
import JefHarkayResume from "@/components/JefHarkayResume.vue";

export const duration = 1000;

export const ResumeRoute = "resume";

export const SummaryRoute = "summary";

export const SkillsRoute = "skills";

export const ExperienceRoute = "experience";

export const EducationRoute = "education";

export const CoverLetterRoute = "coverLetter";

export const routes: RouteRecordRaw[] = [{
	path: "/",
	name: SummaryRoute,
	components: {
		JefHarkayResume,
	},
}, {
	path: "/cover-letter",
	name: CoverLetterRoute,
	components: {
		JefHarkayCoverLetter,
	},
}, {
	path: "/:pathMatch(.*)*",
	name: SummaryRoute,
	components: {
		JefHarkayResume,
	},
}];

export const router = createRouter({
	routes,
	history: createWebHashHistory(),
	scrollBehavior(to, from) {
		const { name = "" } = to;
		let timeout = duration;
		const isCoverLetter = name === CoverLetterRoute;
		/**
		 * If we're coming from the root route (usually initial page load), or we're transitioning to the cover letter,
		 * or we're on the Resume page, we want to disable the delay for the router to perform scrolling.
		 */
		if (from.fullPath === "/" || isCoverLetter || to.matched[0]?.name === ResumeRoute && from.matched[0]?.name === ResumeRoute) {
			timeout = 0;
		}
		return new Promise((resolve) => {
			setTimeout(() => {
				if (isCoverLetter || name === SummaryRoute) {
					return resolve({
						top: 0,
						left: 0,
						behavior: isCoverLetter ? "instant" : "smooth",
					});
				}
				return resolve({
					el: `#${name.toString()}`,
					top: 104,
					behavior: "smooth",
				});
			}, timeout);
		});
	},
});

export function viewResumeSummary() {
	return router.push({
		name: SummaryRoute,
	});
}

export function viewResumeSkills() {
	return router.push({
		name: SkillsRoute,
	});
}

export function viewResumeExperience() {
	return router.push({
		name: ExperienceRoute,
	});
}

export function viewResumeEducation() {
	return router.push({
		name: EducationRoute,
	});
}

export function viewCoverLetter() {
	return router.push({
		name: CoverLetterRoute,
	});
}
