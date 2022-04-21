<script>

 import Accordion from './Accordion.svelte';
 import AccordionItem from './AccordionItemMissing.svelte';

 let active = null;
 
 export let data;
 export let name;

 const getStdPackagesForCategory = (category) => {
   return data
     .filter(p => p.category === category)
 } 



 
</script>

<Accordion bind:active>
  <AccordionItem id="0" title={name} >
    <div class="text-red-800 p-3 m-2">
      <ul class="list-disc">
	{#each getStdPackagesForCategory(name) as p}
	  <li class="flex">
	    <a class="hover:text-black" href="https://npmjs.com/package/{p.name}" target="_blank">{p.name}</a>
	  </li>
	{/each}
      </ul>
    </div>

  </AccordionItem> 

</Accordion>




<style>
</style>
