<script>
 import { createEventDispatcher } from "svelte";
 const dispatch = createEventDispatcher();

 let repoUrl;
 let repoPath;
 let error;
 let isRepoProcessed = false;
 

 const handleSubmit = (e) => {
   readRepo(repoUrl);
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
     dispatch('message',{
       text: manifest
     })
     isRepoProcessed = true;
   }).catch(err => {
     error = err;
   })

 }

</script>
<div class="my-4">
	<h1 class="text-2xl text-gray-500 p-2 text-center">Read from a Github repository</h1>
	<form on:submit|preventDefault={handleSubmit}>
	  <label class="block text-gray-500 my-2" for="txtUrl"><span class="text-red-500">*</span> Enter repository url here...</label>
	  <input class="block w-full p-2 border border-gray-300 rounded my-2"
		 type="text"
		 id="txtUrl"
		 placeholder="https://github.com/rajasegar/tooling-manager"
		 bind:value={repoUrl}
		 required
	  />
	  <label class="block text-gray-500 my-2" for="txtPath">Filepath: (optional, default: 'package.json')</label>
	  <input class="block w-full p-2 border border-gray-300 rounded my-2"
		 type="text"
		 id="txtPath"
		 placeholder="package.json"
		 bind:value={repoPath}
	  />
	  

	  <button type="submit" class=" text-white text-1xl py-2 px-6 my-2 rounded bg-gradient-to-b from-gray-700 to-gray-800 hover:from-pink-500 hover:to-yellow-500">
	    Read Repo
	  </button>
	  {#if isRepoProcessed}
	    <div class="bg-green-100 text-green-700 border border-green-400 rounded p-2">
	      <span class="font-bold">{repoUrl}</span> processed successfully.
	    </div>
	  {/if}
	  {#if error}
	    <div class="bg-red-100 text-red-700 border border-red-400 rounded p-2">
	      {error}
	    </div>
	  {/if}

	</form>
	
      </div>
