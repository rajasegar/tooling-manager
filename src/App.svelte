<script>
 import Dependencies from './lib/Dependencies.svelte';
 import DevDependencies from './lib/DevDependencies.svelte';
 import Tabs from './lib/Tabs.svelte';

 let  fileinput;
 let pkg;
 let isPkgUploaded = false;
 let currDependencies = [];
 let currDevDependencies = [];

 const onFileSelected =(e)=>{
   pkg = e.target.files[0];
   let reader = new FileReader();
   reader.readAsText(pkg);
   reader.onload = e => {

     const manifest = JSON.parse(e.target.result);
     currDependencies = Object.keys(manifest.dependencies);
     currDevDependencies = Object.keys(manifest.devDependencies);
     isPkgUploaded = true;
   };
 }
 
</script>

<div id="app" class="w-100 min-h-screen bg-gray-100 flex flex-col items-center justify-center p-2">
  
  {#if !isPkgUploaded}
    <h1 class="text-4xl text-indigo-700 p-2 text-center">Scan your package.json</h1>
    <button type="button" class="text-white text-4xl py-2 px-6 m-4 rounded bg-gradient-to-b from-indigo-300 to-indigo-500 hover:from-pink-500 hover:to-yellow-500" on:click={()=>{fileinput.click();}}>
      Choose File
    </button>
    <input style="display:none" type="file" accept=".json" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >

  {:else}
    <h1 class="text-4xl text-indigo-700 p-2 text-center">{pkg.name}</h1>

  <Tabs>

    <Dependencies packages={currDependencies} slot="tab1" />
    <DevDependencies packages={currDevDependencies} slot="tab2" />
  </Tabs>
  {/if}

</div>
<style>
</style>



