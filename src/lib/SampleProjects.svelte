<script>
 import { createEventDispatcher } from 'svelte';

 /* import { Octokit } from "https://cdn.skypack.dev/octokit"; */
 const dispatch = createEventDispatcher();
 
 /* const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN }); */
 import reactBoilerplates from '../data/repos/react';
 import svelteBoilerplates from '../data/repos/svelte';

 let projects = [];

 let error;
 
const readRepo = (url) => {
   const [owner, repo] = url
     .replace('https://github.com/','')
     .replace('git://github.com/','')
     .replace('.git','')
   .split('/')
   /*
   octokit.rest.repos.getContent({
     owner,
     repo,
     path: 'package.json',
   }).then(response => {
      const manifest = JSON.parse(atob(response.data.content));
     dispatch('message',{
       text: manifest,
       name: repo,
     })
   }).catch(err => {
     error = err;
   });
   */
 }

 function handleChange(ev) {
   readRepo(ev.target.value);
 }

 function chooseBoilerplates(ev) {

   if(ev.target.value === 'Svelte') {
     projects = svelteBoilerplates;
   } else {
     projects = reactBoilerplates;
   }
   
 }
 
</script>

<div>
  <h3 class="text-1xl text-gray-500 mb-2">Choose a Framework:</h3>
<select on:change={chooseBoilerplates} class="p-2 border border-gray-400 rounded mb-4">
  <option value="">-- Select Framework --</option>
  <option value="React">React</option>
  <option value="Svelte">Svelte</option>
</select>

  <h3 class="text-1xl text-gray-500 mb-2">Choose a boilerplate:</h3>
<select on:change={handleChange} class="p-2 border border-gray-400 rounded">
  <option value="">-- Select Project --</option>
  {#each projects as p}
    <option value={p.url}>{p.name}</option>
    {/each}
</select>
{#if error}<div class="bg-red-100 border border-red-400 text-red-500 rounded p-2 my-2">{error}</div>{/if}
</div>
