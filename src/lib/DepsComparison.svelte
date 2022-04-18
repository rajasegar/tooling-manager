<script>

 import { getPackagesForCategory } from '../lib/utils';


 export let categories = [];
 export let data = [];
 export let packages = [];
 export let projects = [];

 
</script>


  <table class="w-full">
    <thead>
      <th>Categories</th>
      <th>{projects[0].name}</th>
      <th>{projects[1].name}</th>
    </thead>
    <tbody>
      {#each categories as category}
      <tr>
	<td class="border-4 border-separate border-gray-100 bg-blue-500 text-white p-2">{category}</td>
	{#each packages as pack}
	  {#if getPackagesForCategory(category,data,pack).length > 0}
	<td class="border-4 border-separate border-gray-100 bg-green-600 text-white p-2">
	  {#each getPackagesForCategory(category, data, pack) as p}
	    <li class="list-none"><a href="https://npmjs.com/package/{p}" target="_blank">{p}</a></li>
	    {/each}
	</td>
	{:else}
	<td class="border-4 border-separate border-gray-100 bg-red-600 text-white p-2">
	</td>
	{/if}
	{/each}
	      </tr>
      {/each}
    </tbody>
  </table>
