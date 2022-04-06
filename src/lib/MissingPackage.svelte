<script>

 import { createPopper } from "@popperjs/core";
 import data from '../data';

 let popoverShow = false;

 let btnRef;

 let popoverRef;

 export let name;

  const getStdPackagesForCategory = (category) => {
   return data
     .filter(p => p.category === category)
     .map(p => p.name)
 } 



 function togglePopover(){
   if(popoverShow){
     popoverShow = false;
   } else {
     popoverShow = true;
     createPopper(btnRef, popoverRef, {
       placement: "right"
     });
   }
 }


</script>

<div class="flex flex-wrap">
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
</div>

<style>
</style>
