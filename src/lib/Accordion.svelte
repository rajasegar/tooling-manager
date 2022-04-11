<script>
 import { setContext } from "svelte";
 
 import { writable } from "svelte/store";

 export let active = null;

 /* 
    I want to sync the value of the active prop and of the activeStore
    so when one of them changes the other one will change. 
    Like how 2-way binding.
  */
 const activeStore = writable(active);
 $: activeStore.set(active);
 $: active = $activeStore;
 
 $: {
   console.log("Prop and store not are not synchronized");
   console.log("active: ", active);
   console.log("activeStore: ", $activeStore);
   console.log();
   console.log();
 };
 
 setContext("context", activeStore);
</script>

<slot/>
