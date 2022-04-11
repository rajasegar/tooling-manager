<script>
  export let packages;

 import { difference, intersection, uniq } from 'ramda';
 import data from '../data/prod';
 import MissingPackage from './MissingPackage.svelte'; 
 import FoundPackage from './FoundPackage.svelte';
 import { getCategories, getCategoryFor } from './utils';

 let found = '', missing = '';
 

const stdPackages = data.map(d => d.name);

     // Find the difference for missing libs
     const _missing = difference(stdPackages, packages);

     // find the intersection for installed / found libs
     const _found = intersection(stdPackages, packages);


     const foundCategories = uniq(getCategories(_found, data));
     const missingCategories = uniq(getCategories(_missing, data));

     // remove the found category items from missing
     // only one category lib is sufficient
     const finalMissing = missingCategories.filter(c => !foundCategories.includes(c));

     found = foundCategories.sort();
     missing = finalMissing.sort();


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
    <table>
      {#each missing as m}
	<tr>
	  <td class="px-4">
	    <MissingPackage name={m} data={data} />
	  </td>
	</tr>
	{/each}
    </table>
  </div>
  <div class="bg-indigo-100 p-4">
    <h3 class="text-indigo-700 font-bold mb-2">Dependencies ({packages.length})</h3>
    <ul>
    {#each packages as p}
      <li class="p-1">
	<a class="text-indigo-600 hover:text-black" href="https://npmjs.com/package/{p}" target="_blank">{p}</a>
	{#if getCategoryFor(p, data) === 'unknown'}
    <span class="bg-red-500 text-white text-sm px-2 py-1 rounded shadow mr-1 mb-1">
      {getCategoryFor(p, data)}
    </span>
	  {:else}
    <span class="bg-indigo-500 text-white text-sm px-2 py-1 rounded shadow mr-1 mb-1">
      {getCategoryFor(p, data)}
    </span>
    {/if}
      </li>
      {/each}
    </ul>

  </div>

  </div>
</div>

<style>
</style>
