<script>

 import Accordion from './Accordion.svelte';
 import AccordionItem from './AccordionItem.svelte';
 import alternative from '../assets/alternative.svg';

 import Popover from './Popover.svelte';

 let active = null;
 
 export let data;
 export let name;

 const getStdPackagesForCategory = (category) => {
   return data
     .filter(p => p.category === category)
 } 



 
</script>

<Accordion bind:active>
  <AccordionItem color="red" id="0" title={name} >
    <div class="text-red-800 p-3 m-2">
      <ul class="list-disc">
	{#each getStdPackagesForCategory(name) as p}
	  <li class="flex">
	    <a class="hover:text-black" href="https://npmjs.com/package/{p.name}" target="_blank">{p.name}</a>
	    <Popover>
	      <span slot="trigger" title="Alternatives"><img src={alternative} alt="Alternatives" width="24" /></span>
	      <div slot="content">
		<h3>Alternatives: </h3>
		<ul class="list-disc">
		  {#each p.alternatives || [] as a}
		    <li>
		      <a class="hover:text-black" href="https://npmjs.com/package/{a}" target="_blank">{a}</a>
		    </li>
		  {/each}
		</ul>
	      </div>
	    </Popover>
	  </li>
	{/each}
      </ul>
    </div>

  </AccordionItem> 

</Accordion>



<!-- <div class="flex flex-wrap">
     <div class="w-full text-left">
     <button bind:this="{btnRef}" on:click={togglePopover} class="bg-orange-500 text-white active:bg-orange-600 text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
     {name}
     </button>
     <div bind:this="{popoverRef}" class="bg-blue-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg {popoverShow ? 'block':'hidden'}">
     <div>
     <div class="bg-blue-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg">
     {name}
     </div>
     <div class="text-white p-3 m-2">
     <ul class="list-disc">
     {#each getStdPackagesForCategory(name) as p}
     <li><a href="#">{p}</a></li>
     {/each}
     </ul>
     </div>
     </div>
     </div>
     </div>
     </div> -->

<style>
</style>
