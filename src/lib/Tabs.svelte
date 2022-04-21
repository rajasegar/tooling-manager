

<script>

 let openTab = 1;

 function toggleTabs(tabNumber){
   openTab = tabNumber
 }

 export let labels = [];

</script>

<div class="max-w-7xl mx-auto flex flex-wrap">
  <div class="w-full">
    <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
      {#each labels as label, i}
      <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <button type="button" class="w-full text-xs font-bold uppercase px-5 py-3 shadow hover:shadow-lg rounded block leading-normal {openTab === i+1 ? 'text-white bg-gray-600':'text-gray-600 bg-white'}" on:click={() => toggleTabs(i+1)}>
	  <span>{label}</span>
        </button>
      </li>
      {/each}
    </ul>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="px-4 py-5 flex-auto">
        <div class="tab-content tab-space">
          <div class="{openTab === 1 ? 'block':'hidden'}">
	    <slot name="tab1"></slot>
          </div>
          <div class="{openTab === 2 ? 'block':'hidden'}">
	    <slot name="tab2"></slot>
          </div>
          <div class="{openTab === 3 ? 'block':'hidden'}">
	    <slot name="tab3"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

