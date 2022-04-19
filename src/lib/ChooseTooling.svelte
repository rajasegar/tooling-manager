<script>
 export let categories = [];
</script>
<div>
  <h1>Choose</h1>
  {#each categories as category}
    <p><input type="checkbox" />{category}</p>
  {/each}
  
</div>
