<script>
 import { Link } from 'svelte-routing';

 export let to = "";

 function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
   const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

   const classes = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ";
   const activeClass = "bg-gray-900 text-white";
   if (isActive) {
     return { class: classes.concat(activeClass) };
   }
   return {
     class: classes
   };
 }
 
</script>

<Link to="{to}" getProps="{getProps}">
<slot />
</Link>
