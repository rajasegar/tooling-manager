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
	    <img src="/foundmissing.png" alt="found and missing"/>
	  </div>
        </div>

	<div class="grid grid-cols-2 gap-4 sm:text-center lg:text-left mt-16">
	  <div>
	    <img src="/comparison.png" alt="comparison">
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

	<div class="grid grid-cols-2 gap-4 sm:text-center lg:text-left mt-16">
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
	    <img src="/timeline.png" alt="timeline"/>
	  </div>
        </div>

  </main>
  


</div>






