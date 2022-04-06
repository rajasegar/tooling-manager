<script>

 import data from './data';

 import { difference, intersection, uniq } from 'ramda';

 import MissingPackage from './lib/MissingPackage.svelte'; 
 import FoundPackage from './lib/FoundPackage.svelte';

 let  fileinput;
 let found = '', missing = '';
 let isPkgUploaded = false;
 let currentPackages = [];

 const getCategories = (arr) => {
   return arr.map(m => {
     return (data.find(d => d.name === m)).category;
   });
 };

 const getCategoryFor = (p) => {
   const [item] = data.filter(d => d.name === p);
   return item ? item.category : 'unknown';
 }

 const onFileSelected =(e)=>{
   let pkg = e.target.files[0];
   let reader = new FileReader();
   reader.readAsText(pkg);
   reader.onload = e => {

     const manifest = JSON.parse(e.target.result);
     currentPackages = Object.keys(manifest.dependencies);

     const stdPackages = data.map(d => d.name);

     // Find the difference for missing libs
     const _missing = difference(stdPackages, currentPackages);

     // find the intersection for installed / found libs
     const _found = intersection(stdPackages, currentPackages);


     const foundCategories = uniq(getCategories(_found));
     const missingCategories = uniq(getCategories(_missing));

     // remove the found category items from missing
     // only one category lib is sufficient
     const finalMissing = missingCategories.filter(c => !foundCategories.includes(c));

     found = foundCategories.sort();
     missing = finalMissing.sort();

     isPkgUploaded = true;

   };
 }
 
</script>

<div id="app" class="w-100 min-h-screen bg-gray-100 flex flex-col items-center justify-center">
  <h1 class="text-4xl text-indigo-700 p-2 text-center">Scan your package.json</h1>
  
  {#if !isPkgUploaded}
    <button type="button" class="text-white text-4xl py-2 px-6 m-4 rounded bg-gradient-to-b from-indigo-300 to-indigo-500 hover:from-pink-500 hover:to-yellow-500" on:click={()=>{fileinput.click();}}>
      Choose File
    </button>
  <input style="display:none" type="file" accept=".json" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >

  {:else}
  <div class="grid grid-cols-2 gap-4 min-h-full">
  <div class="bg-green-100 w-100">
    <h2 class="bg-green-700 text-white text-xl text-center p-2 mb-4">FOUND:</h2>
    <table>
      {#each found as f}
	<tr>
	  <td class="px-4">
	    <FoundPackage name={f}  dependencies={currentPackages} />
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
	    <MissingPackage name={m} />
	  </td>
	</tr>
	{/each}
    </table>
  </div>
  </div>
  <div class="bg-indigo-100 p-4">
    <h3 class="text-indigo-700 font-bold mb-2">Dependencies ({currentPackages.length})</h3>
    <ul>
    {#each currentPackages as p}
      <li class="p-1">
	{p}
	{#if getCategoryFor(p) === 'unknown'}
    <span class="bg-red-500 text-white text-sm px-2 py-1 rounded shadow mr-1 mb-1">
      {getCategoryFor(p)}
    </span>
	  {:else}
    <span class="bg-indigo-500 text-white text-sm px-2 py-1 rounded shadow mr-1 mb-1">
      {getCategoryFor(p)}
    </span>
    {/if}
      </li>
      {/each}
    </ul>

  </div>
  {/if}

</div>
<style>
</style>



