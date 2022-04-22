<script>

 export let dir;
</script>

<div class="mb-8 flex {dir === 'left' ? 'flex-row-reverse': ''} justify-between items-center w-full right-timeline">
  <div class="order-1 w-5/12"></div>
  <div class="z-20 flex items-center order-1 bg-gray-700 shadow-xl w-8 h-8 rounded-full">
    <h1 class="mx-auto font-semibold text-lg text-white"></h1>
  </div>
  <div class="order-1 {dir === 'left' ? 'bg-white' : 'bg-gray-700' } rounded-lg shadow-xl w-5/12 px-6 py-4">
    <h3 class="mb-3 font-bold { dir === 'left' ? 'text-gray-700' : 'text-white' } text-xl">
      <slot name="title"></slot>
    </h3>
    <p class="text-sm leading-snug tracking-wide { dir === 'left' ? 'text-gray-700' : 'text-white' } text-opacity-100">
      <slot></slot>
    </p>
  </div>
</div>
