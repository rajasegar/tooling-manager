<script>
 import TimelineItem from "./TimelineItem.svelte"; 
 export let packages;

 let error;
 async function getVersionDate() {

   const url = new URL('timeline', location.origin);
   
   return fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({ deps: packages})
   })
     .then(response => response.json())
     .then(data => {
       return data;
     }).catch(err => {
       error = err;
     })

 }

</script>
<div class="container mx-auto w-full h-full">
  <div class="relative wrap overflow-hidden p-10 h-full">


    {#await getVersionDate()}
      <span class="text-2xl text-gray-700 mb-4">Loading timeline...</span>
    {:then response}
    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>
      {#each response as r, idx}
	<TimelineItem dir={idx % 2 === 0 ? 'left' : ''}>
	  <span slot="title">{r.time}</span>
	  <p>{r.name}@{r.version}</p>
	  <p>Latest version: {r.latest} published on {r.latestDate}</p>
	</TimelineItem>
      {/each}
    {:catch error}
      <span>{error}</span>
    {/await}
    
  </div>
</div>
