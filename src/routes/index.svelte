<script context="module" lang="ts">
 export const prerender = true;
</script>

<script lang="ts">
 
 

</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="w-full min-h-screen bg-gray-100 mx-auto p-2">
  <div class="flex flex-col items-center">
  <h1 class="text-7xl font-bold text-gray-700 mt-4">Tooling Manager</h1>
  <span class="text-gray-500 p-4">Compare your JavaScript Tech Stack against industry standard boilerplates.</span>
  <div>
    <a href="https://www.producthunt.com/posts/tooling-manager?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tooling&#0045;manager" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=343208&theme=light" alt="Tooling&#0032;Manager - Compare&#0032;your&#0032;JS&#0032;Tech&#0032;Stack&#0032;against&#0032;other&#0032;boilerplates | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
  </div>

  </div>
  <main class="mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6  lg:px-8 ">
        <div class="grid grid-cols-2 gap-4 sm:text-center lg:text-left">
	  <div>
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Find out the </span>
            <span class="block text-indigo-600 xl:inline">missing tools</span>
            <span class="block xl:inline">in your projects</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
	    By scanning your package.json or github repo and comparing with our database of tools categorized by their functions,
	    we let you know what are the important tooling you are missing in your projects.</p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="/react" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="/sveltejs" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Svelte </a>
            </div>
          </div>
	  </div>
	  <div>
	    <a href="/foundmissing.png">
	    <img src="/foundmissing.png" alt="found and missing"/>
	    </a>
	  </div>
        </div>

	<div class="grid grid-cols-2 gap-4 sm:text-center lg:text-left mt-16">
	  <div>
	    <a href="/comparison.png">
	    <img src="/comparison.png" alt="comparison">
	    </a>
	  </div>
	  <div>
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Compare your project stack </span>
            <span class="block text-indigo-600 xl:inline">against</span>
            <span class="block xl:inline">the famous boilerplates</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
	    You can compare your projects with other projects and boilerplates in Github to see what the tooling
	    are used in theirs versus yours, which will help you to make better decisions about what you need in your
	    projects and what not.
	  </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="/compare" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Start Comparing </a>
            </div>
          </div>
	  </div>
        </div>

	<div class="grid grid-cols-2 gap-4 sm:text-center lg:text-left mt-16 mb-8">
	  <div>
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Generate </span>
            <span class="block text-indigo-600 xl:inline">beautiful timelines</span>
            <span class="block xl:inline">about your project dependencies</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
	    Find your oldest and latest packages installed in your projects from this generated timeline.
	    You can also have information about what is the latest version available for your dependencies
	    and the date they were published.
	  </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="/react" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Generate Timeline </a>
            </div>
          </div>
	  </div>
	  <div>
	    <a href="/timeline.png">
	    <img src="/timeline.png" alt="timeline"/>
	    </a>
	  </div>
        </div>


  </main>
  


</div>






