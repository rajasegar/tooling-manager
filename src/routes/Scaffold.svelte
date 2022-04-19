<script>


 import Tabs from '../lib/Tabs.svelte';
 import { uniq } from 'ramda';
 import prodData from '../data/prod';
 import devData from '../data/dev';
import ChooseTooling from "../lib/ChooseTooling.svelte";

 let error  = '';

 const prodCategories = uniq(prodData.map(p => p.category)).sort();
 const devCategories = uniq(devData.map(p => p.category)).sort();

 function downloadScaffold() {
   
 }



 
</script>


<div class="w-full min-h-screen bg-gray-100 mx-auto p-2">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

      <div>
	<Tabs labels={['React','Svelte']}>
	  <div slot="tab1">
	    <Tabs labels={["Dependencies", "DevDependencies"]}>
	      <ChooseTooling categories={prodCategories} slot="tab1" />
	      <ChooseTooling categories={devCategories} slot="tab2" />
	    </Tabs>
	  </div>
	  <div slot="tab2">
	  </div>
	</Tabs>
      </div>



    <div class="flex flex-col items-center">
      <button class=" text-white text-5xl py-2 px-6 my-8 rounded bg-gradient-to-b from-gray-700 to-gray-800 hover:from-pink-500 hover:to-yellow-500 disabled:bg-red-100 disabled:text-white disabled:cursor-not-allowed" on:click={downloadScaffold} >Download</button>
    </div>
      
    <div class="max-w-7xl mx-auto">
      {#if error}
	<p class="text-center bg-red-200 text-red-700 p-2 rounded border border-red-700 font-bold">Github Error: {error}</p>
      {/if}
      
    </div>
    </div>

</div>
