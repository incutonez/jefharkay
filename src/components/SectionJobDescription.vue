<script setup lang="ts">
import { computed, ref } from "vue";
import IconCollapse from "@material-symbols/svg-400/outlined/arrow_drop_down.svg";
import IconExpand from "@material-symbols/svg-400/outlined/arrow_drop_up.svg";

interface ISectionJobDescription {
	position: string;
	company: string;
	location: string;
	dateStart: string;
	dateEnd: string;
	project: string;
	multipleProjects?: boolean;
	industry: string;
	tasks?: string[];
	pageBreakAfter?: boolean;
	pageNew?: boolean;
	printMax?: number;
	showSeparator?: boolean;
}

const { pageBreakAfter, pageNew, tasks = undefined, printMax = 10, showSeparator = true } = defineProps<ISectionJobDescription>();
const collapsed = ref(false);
const classes = computed(() => {
	return {
		"print:break-after-page": pageBreakAfter,
		"print:mt-4": pageNew,
	};
});

function getTaskClasses(index: number) {
	return {
		"print:hidden": index >= printMax,
	};
}

function onClickToggleVisible() {
	collapsed.value = !collapsed.value;
}
</script>

<template>
  <article
    class="relative"
    :class="classes"
  >
    <section class="flex flex-wrap leading-4 md:flex-row mb-0.5 pr-6">
      <span class="font-semibold">{{ position }}</span>
      <span class="mx-1">|</span>
      <span class="font-semibold">{{ company }}</span>
      <span class="mx-1">|</span>
      <span>{{ location }}</span>
      <span class="w-full font-semibold text-gray-700 md:ml-auto md:w-auto">{{ dateStart }} - {{ dateEnd }}</span>
    </section>
    <section class="mb-0.5 flex flex-col md:flex-row pr-6">
      <span>
        <span class="font-semibold text-blue-resume">Project{{ multipleProjects ? 's' : '' }}</span>
        <span>: {{ project }}</span>
      </span>
      <span class="italic text-gray-700 md:ml-auto">{{ industry }}</span>
    </section>
    <button
      class="absolute -top-1 -right-1 flex size-6 cursor-pointer print:hidden"
      :title="collapsed ? 'Expand' : 'Collapse'"
      @click="onClickToggleVisible"
    >
      <IconCollapse
        v-if="collapsed"
        class="size-full"
      />
      <IconExpand
        v-else
        class="size-full"
      />
    </button>
    <ul
      v-show="!collapsed"
      class="ml-4 list-disc print:block!"
    >
      <slot name="tasks">
        <li
          v-for="(task, index) in tasks"
          :key="task"
          :class="getTaskClasses(index)"
          v-html="task"
        />
      </slot>
    </ul>
    <hr
      v-if="showSeparator"
      class="mt-2 border-gray-300 border-dashed print:hidden"
    >
  </article>
</template>
