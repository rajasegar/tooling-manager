<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer class="bg-gray-900 text-white text-center p-4">
  <p>
    <a class="text-blue-400 hover:text-blue-100"
       href="https://github.com/rajasegar/tooling-manager">Github</a>
    Built with <a class="text-blue-400 hover:text-blue-100" href="https://kit.svelte.dev">SvelteKit</a></p>
</footer>

