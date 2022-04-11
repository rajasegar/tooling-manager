<script>

 import Accordion from './Accordion.svelte';
 import AccordionItem from './AccordionItem.svelte';
 import alternative from '../assets/alternative.svg';

 import Popover from './Popover.svelte';

 let active = null;

 export let name;
 export let dependencies;
 export let data;

  const getPackagesForCategory = (category) => {
   return data
     .filter(p => p.category === category && dependencies.includes(p.name))
  } 


</script>

<Accordion bind:active>
  <AccordionItem id="0" title="{name} ({getPackagesForCategory(name).length})" >
    <div class="text-green-800 p-3 m-2">
      <ul class="list-disc">
	{#each getPackagesForCategory(name) as p}
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


<style>
</style>
