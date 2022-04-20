<script>

 import DepsComparison from "../lib/DepsComparison.svelte"; 
 import UploadPackageJson from "../lib/UploadPackageJson.svelte"; 
 import ReadGithubRepo from '../lib/ReadGithubRepo.svelte';

 import Tabs from '../lib/Tabs.svelte';
 import { uniq } from 'ramda';
 import prodData from '../data/prod';
 import devData from '../data/dev';
 import SampleProjects from "../lib/SampleProjects.svelte";

 let showComparison = false;
 let enableCompareBtn = false;
 let currDependencies = [];
 let currDevDependencies = [];
 let projects = [];
 let error  = '';


 const prodCategories = uniq(prodData.map(p => p.category)).sort();
 const devCategories = uniq(devData.map(p => p.category)).sort();


 function updateFirstRepo(event) {
   const manifest = event.detail.text;
   projects[0] = { name: event.detail.name};
   currDependencies[0] = manifest.dependencies;
   currDevDependencies[0] = manifest.devDependencies;
   enableComparison();
 }

 function updateSecondRepo(event) {
   const manifest = event.detail.text;
   projects[1] = { name: event.detail.name};
   currDependencies[1] = manifest.dependencies;
   currDevDependencies[1] = manifest.devDependencies;
   enableComparison();
 }

 function enableComparison() {
   console.log(projects.length, currDependencies.length, currDevDependencies.length);
   enableCompareBtn = projects.length > 1 && currDependencies.length > 1 && currDevDependencies.length > 1;
 }

 function compareProjects() {
   showComparison = true;
 }

 function reset() {
   showComparison = false;
   currDependencies = [];
   currDevDependencies = [];
   projects = [];
   enableCompareBtn = false;
 }
 
</script>

<svelte:head>
  <title>Tooling Manager - Compare</title>
</svelte:head>



<div class="w-full min-h-screen bg-gray-100 mx-auto p-2">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
  {#if !showComparison}
    <div class="grid grid-cols-2 gap-8">

      <div>
	<Tabs labels={['Scan','Github','Boilerplates']}>
	<UploadPackageJson on:message={updateFirstRepo} slot="tab1" />
	<ReadGithubRepo on:message={updateFirstRepo} slot="tab2" />
	<SampleProjects on:message={updateFirstRepo} slot="tab3" />
	</Tabs>
      </div>

      <div>
	<Tabs labels={['Scan','Github','Boilerplates']}>
	<UploadPackageJson on:message={updateSecondRepo} slot="tab1" />
	<ReadGithubRepo on:message={updateSecondRepo} slot="tab2" />
	<SampleProjects on:message={updateSecondRepo} slot="tab3" />
	</Tabs>
      </div>

    </div>

    <div class="flex flex-col items-center">
      <button class=" text-white text-5xl py-2 px-6 my-8 rounded bg-gray-800 disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed" on:click={compareProjects} disabled={!enableCompareBtn}>Compare Projects</button>
    </div>
      
    <div class="max-w-7xl mx-auto">
      {#if error}
	<p class="text-center bg-red-200 text-red-700 p-2 rounded border border-red-700 font-bold">Github Error: {error}</p>
      {/if}
      
    </div>
  {:else}

    <div class="flex items-center justify-between">
      <h2 class="text-2xl text-gray-900">{projects[0].name} <span class="text-gray-500">vs</span> {projects[1].name}</h2>
      <div>
	<button on:click={() => {reset()}} class="bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600 rounded shadow">Clear &times;</button>
      </div>
    </div>
    <Tabs labels={["Dependencies","DevDependencies"]}>
  <DepsComparison projects={projects} categories={prodCategories} data={prodData} packages={currDependencies} slot="tab1" />
  <DepsComparison projects={projects} categories={devCategories} data={devData} packages={currDevDependencies} slot="tab2" />
  </Tabs>
  {/if}
    </div>

</div>

