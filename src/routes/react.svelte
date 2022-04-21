<script context="module" lang="ts">
 export const prerender = true;
</script>

<script lang="ts">
 
 import repos from '../data/repos/react';
 import Dependencies from '../lib/Dependencies.svelte';
 import DevDependencies from '../lib/DevDependencies.svelte';
 import PopularProjects from "../lib/PopularProjects.svelte";
 import Tabs from '../lib/Tabs.svelte';
 import Timeline from '../lib/Timeline.svelte';

 import devTooling from '../data/dev';
 import reactDevTooling from '../data/dev/frameworks/react';

 import prodTooling from '../data/prod';
 import reactProdTooling from '../data/prod/frameworks/react';

 const devData = [...devTooling, ...reactDevTooling];
 const prodData = [...prodTooling, ...reactProdTooling];

 let fileinput;
 let repoUrl:string;
 let repoPath:string;
 let pkg;
 let isPkgUploaded = false;
 let currDependencies = [];
 let currDevDependencies = [];
 let error  = '';


 function reset() {
   isPkgUploaded = false;
   error = '';
 }

 const onFileSelected =(e)=>{
   pkg = e.target.files[0];
   let reader = new FileReader();
   reader.readAsText(pkg);
   reader.onload = e => {

     const manifest = JSON.parse(e.target.result);
     currDependencies = manifest.dependencies;
     currDevDependencies = manifest.devDependencies;
     isPkgUploaded = true;
   };
 }

 const handleSubmit = (e) => {
   readRepo(repoUrl);
 }

 const handleRepoMessage = (e) => {
   const url = e.detail.text;
   readRepo(url);
 }

 const readRepo = (url) => {
   const [owner, repo] = url
     .replace('https://github.com/','')
     .replace('git://github.com/','')
     .replace('.git','')
   .split('/')
   
   const githubUrl = new URL('github', location.origin);
   const queryparams = { owner, repo , path: repoPath || 'package.json'};
   for (let k in queryparams) { githubUrl.searchParams.append(k, queryparams[k]); }
   
   fetch(githubUrl, {
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
   })
   .then(response => response.json())
   .then(manifest => {
     pkg = { name: `${owner}/${repo}` };
     currDependencies = manifest.dependencies;
     currDevDependencies = manifest.devDependencies;
     isPkgUploaded = true;
     repoUrl = '';
     
   }).catch(err => {
     error = err;
   })

 }

</script>

<svelte:head>
  <title>Tooling Manager - React</title>
</svelte:head>

<div class="w-full min-h-screen bg-gray-100 mx-auto">
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">React</h1>
    </div>
  </header>
  
  {#if !isPkgUploaded}
    <div class="max-w-7xl mx-auto flex flex-row items-center justify-evenly content-center">
      <div class="">
	<h1 class="text-3xl text-gray-500 p-2 text-center">Scan your package.json</h1>
	<button type="button" class="text-white text-3xl py-2 px-6 m-4 rounded bg-gradient-to-b from-gray-700 to-gray-800 hover:from-pink-500 hover:to-yellow-500" on:click={()=>{fileinput.click();}}>
	  Choose File
	</button>
	<input style="display:none" type="file" accept=".json" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
      </div>
      <div>
	<h2 class="text-3xl text-gray-400">OR</h2>
      </div>
      <div class="ml-4">
	<h1 class="text-3xl text-gray-500 p-2 text-center">Read from a Github repository</h1>
	<form on:submit|preventDefault={handleSubmit}>
	  <label class="block text-gray-500 m-2" for="txtUrl"><span class="text-red-500">*</span> Enter repository url here...</label>
	  <input class="block w-full p-2 border border-gray-300 rounded m-2"
		 type="text"
		 id="txtUrl"
		 placeholder="https://github.com/rajasegar/tooling-manager"
		 bind:value={repoUrl}
		 required
	  />
	  <label class="block text-gray-500 m-2" for="txtPath">Filepath: (optional, default: 'package.json')</label>
	  <input class="block w-full p-2 border border-gray-300 rounded m-2"
		 type="text"
		 id="txtPath"
		 placeholder="package.json"
		 bind:value={repoPath}
	  />
	  

	  <button type="submit" class=" text-white text-3xl py-2 px-6 m-4 rounded bg-gradient-to-b from-gray-700 to-gray-800 hover:from-pink-500 hover:to-yellow-500">
	    Read Repo
	  </button>
	</form>
	
      </div>
    </div>
    <div class="max-w-7xl mx-auto">
      {#if error}
	<p class="text-center bg-red-200 text-red-700 p-2 rounded border border-red-700 font-bold">Github Error: {error}</p>
      {/if}
      
    </div>

    <div class="max-w-7xl mx-auto">
      <PopularProjects repos={repos} on:message={handleRepoMessage} >
	<span slot="heading">Boilerplates</span>
      </PopularProjects>
    </div>
  {:else}
    <div class="max-w-7xl mx-auto flex items-center">
      <h1 class="text-2xl text-gray-600 p-2 text-center">{pkg.name}</h1>
      <div>
	<button on:click={() => {reset()}} class="bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600 rounded shadow">Clear &times;</button>
      </div>

    </div>
    <Tabs labels={["Dependencies","DevDependencies", "Timeline"]}>
      <Dependencies data={prodData} packages={currDependencies} slot="tab1" />
      <DevDependencies data={devData} packages={currDevDependencies} slot="tab2" />
      <Timeline packages={currDependencies} slot="tab3" />
    </Tabs>
  {/if}

</div>






