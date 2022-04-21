<script>
 export let packages;
 export let data;

 import MissingPackage from './MissingPackage.svelte'; 
 import FoundPackage from './FoundPackage.svelte';
 import { getFoundAndMissing, getCategoryFor } from './utils';

 let [found, missing] = getFoundAndMissing(packages, data);

</script>
<div>
  <div class="grid grid-cols-3 gap-4">
  <div class="bg-green-100 w-100">
    <h2 class="bg-green-700 text-white text-xl text-center p-2 mb-4">FOUND:</h2>
    <table class="w-full">
      {#each found as f}
	<tr>
	  <td class="px-4">
	    <FoundPackage name={f}  dependencies={packages} data={data} />
	  </td>
	</tr>
	{/each}
    </table>
  </div>
  <div class="bg-orange-100 w-100">
    <h2 class="bg-orange-700 text-white text-xl text-center p-2 mb-4">MISSING:</h2>
    <table class="w-full">
      {#each missing as m}
	<tr>
	  <td class="px-4">
	    <MissingPackage name={m}  data={data} />
	  </td>
	</tr>
	{/each}
    </table>
  </div>
<div class="bg-gray-100 p-4">
    <h3 class="text-gray-700 font-bold mb-2">Dev Dependencies ({Object.keys(packages).length})</h3>
    <ul>
    {#each Object.keys(packages) as p}
      <li class="p-1">
	<a class="text-blue-600 hover:text-black" href="https://npmjs.com/package/{p}" target="_blank">{p}</a>
	{#if getCategoryFor(p, data) === 'unknown'}
    <span class="bg-red-500 text-white text-sm px-2 py-1 rounded shadow mr-1 mb-1">
      {getCategoryFor(p, data)}
    </span>
	  {:else}
    <span class="bg-gray-500 text-white text-sm px-2 py-1 rounded shadow mr-1 mb-1">
      {getCategoryFor(p, data)}
    </span>
    {/if}
      </li>
      {/each}
    </ul>

  </div>

  </div>
  
</div>
