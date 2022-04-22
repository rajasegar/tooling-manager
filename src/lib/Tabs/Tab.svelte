<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	
</style>

<button class="p-2 border-b-4 {$selectedTab === tab ? 'border-gray-700 text-gray-700' : 'border-gray-200 text-gray-400' } hover:text-gray-500 hover:border-gray-500"  on:click="{() => selectTab(tab)}">
  <slot></slot>
</button>
