<script>

 import { createPopper } from "@popperjs/core";

 let popoverShow = false;

 let btnRef;

 let popoverRef;


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
    <button bind:this="{btnRef}" on:click={togglePopover} type="button">
      <slot name="trigger"></slot>
    </button>
    <div bind:this="{popoverRef}" class="bg-blue-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg {popoverShow ? 'block':'hidden'}">
      <div>
	<div class="text-white p-3 m-2">
	  <slot name="content"></slot>
	</div>
      </div>
    </div>
  </div>
</div>

