<script>
 
 import { getContext } from 'svelte';

 import caretDown from '../assets/caret-down.svg';

 import { slide } from "svelte/transition";
 
 export let id;

 export let title;

 let isHovered = false;

 let isFocused = false;

 const active = getContext("context");

 $: isCurrentActive = $active === id;

 const onClickHandler = () => {

   if (isCurrentActive) {
     
     $active = null;
   } 
   else {
     
     $active = id;
   }
 }
</script>


<div class="bg-red-600 text-white rounded mb-1">

    <button 
    on:click={onClickHandler}
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
    on:focus={() => isFocused = true}
    on:blur={() => isFocused = false}
    class="flex text-left w-full focus:outline-none items-center justify-between px-2 py-1 ">
        <div class="w-full">
            <div class=" text-sm mb-1 transition">
                <span class=" inline-block transition" class:border-opacity-50={isFocused}
                >
                    {title}  
                </span>    
            </div>
    
        </div>

        <div class=" transform transition " class:rotate-180={isCurrentActive} >
            <img currentColor="white" src={caretDown} width="16" height="16" alt="Open Accordion" />
        </div>
    </button>

    {#if isCurrentActive}
      <div class="px-2 bg-white border border-red-500"
           transition:slide>
        <slot/>
      </div>
    {/if}
</div>
