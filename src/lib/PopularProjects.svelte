<script>
 
 import { createEventDispatcher } from 'svelte';

 const dispatch = createEventDispatcher();

 export let repos = [];

 function checkRepo(url) {
   console.log(url)
   dispatch('message', {
     text: url,
   });
 }

</script>

<div>
  <h2 class="text-3xl text-gray-700 mb-2"><slot name="heading"></slot></h2>
  <hr class="mb-4 bg-gray-300 p-0.5" />
<div class="grid grid-cols-4 gap-2">
  {#each repos as repo}
    <div class="bg-gray-200 border border-gray-300 rounded m-2 p-4 hover:bg-gray-300">
      <p class="font-bold mb-2">{repo.name}</p>
      <p class="mb-2"><a class="text-blue-500 hover:text-blue-600" href={repo.url} target="_blank">Github</a></p>
      <button class="bg-gray-700 text-white rounded p-2" type="button" on:click={() => { checkRepo(repo.url)}}>Take a Look</button>
    </div>
    {/each}
</div>
</div>
