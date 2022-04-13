<script>
 import repos from '../data/repos/react';
 
 import { createEventDispatcher } from 'svelte';

 const dispatch = createEventDispatcher();

 function checkRepo(url) {
   console.log(url)
   dispatch('message', {
     text: url,
   });
 }

</script>

<div>
  <h2 class="text-5xl text-gray-700 mb-2">React projects</h2>
  <hr class="mb-4 bg-gray-300 p-0.5" />
<div class="flex flex-row">
  {#each repos as repo}
    <div class="bg-gray-200 border border-gray-300 rounded m-2 p-4 hover:bg-gray-300">
      <p class="font-bold mb-2">{repo.name}</p>
      <p class="mb-2"><a class="text-blue-500 hover:text-blue-600" href={repo.url} target="_blank">Github</a></p>
      <button class="bg-gray-700 text-white rounded p-2" type="button" on:click={() => { checkRepo(repo.url)}}>Take a Look</button>
    </div>
    {/each}
</div>
</div>
