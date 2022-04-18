<script>
 import { createEventDispatcher } from 'svelte';
 let fileinput;
 let pkg;

 const dispatch = createEventDispatcher();
 let info = '';
 let isFileProcessed = false;

 
 const onFileSelected =(e)=>{
   pkg = e.target.files[0];
   let reader = new FileReader();
   reader.readAsText(pkg);
   reader.onload = e => {
     const manifest = JSON.parse(e.target.result);
     dispatch('message', {
       text: manifest,
       name: pkg.name,
     });
     isFileProcessed = true;
   };
 }


</script>
<div class="flex flex-col items-center">
  <h1 class="text-2xl text-gray-500 p-2">Scan your package.json</h1>
  <button type="button" class="text-white text-1xl py-2 px-6 my-2 rounded bg-gradient-to-b from-gray-700 to-gray-800 hover:from-pink-500 hover:to-yellow-500" on:click={()=>{fileinput.click();}}>
    Choose File
  </button>
  <input style="display:none" type="file" accept=".json" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
  {#if isFileProcessed}
    <div class="bg-green-100 text-green-700 border border-green-400 rounded p-2">
      <span class="font-bold">{pkg.name}</span> processed successfully.
    </div>
  {/if}
</div>

