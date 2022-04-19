<script>

 import { Router, link, Route } from "svelte-routing";
 import Home from "./routes/Home.svelte";
 import EmberPage from "./routes/Ember.svelte";
 import SveltePage from "./routes/Svelte.svelte";
 import ComparePage from './routes/Compare.svelte';

 import NavLink from "./lib/NavLink.svelte"; 
import ScaffoldPage from "./routes/Scaffold.svelte";

 export let url = "";
 
</script>

<Router url="{url}">

  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
	<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
	</div>
	<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="/images/tooling-manager.svg" alt="Workflow">
            <img class="hidden lg:block h-8 w-auto" src="/images/tooling-manager.svg" alt="Workflow">
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
	      <NavLink to="/">React</NavLink>
	      <!-- <NavLink to="ember">Ember</NavLink> -->
	      <NavLink to="svelte">Svelte</NavLink>
	      <NavLink to="compare">Compare</NavLink>
	      <NavLink to="scaffold">Scaffold</NavLink>

            </div>
          </div>
	</div>
	      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
	<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
	<a use:link href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">React</a>

	<a use:link href="/ember" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Ember</a>

	<a use:link href="/svelte" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Svelte</a>

      </div>
    </div>
  </nav>

  <div>
    <Route path="ember" component="{EmberPage}" />
    <Route path="svelte" component="{SveltePage}" />
    <Route path="compare" component="{ComparePage}" />
    <Route path="scaffold" component="{ScaffoldPage}" />
    <Route path="/"><Home /></Route>
  </div>
</Router>

