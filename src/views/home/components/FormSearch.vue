<template>
  <div>
    <h2 class="text-slate-500 mb-6">ACOMODATION TYPE</h2>
    <form>
      <!-- per form input -->
      <div
        class="flex justify-between border-y-[1px] p-4 border-white space-x-6"
      >
        <div class="h-4 w-4 bg-emerald-600"></div>
        <p>Guest House</p>
        <input type="checkbox" />
      </div>
      <!-- per form input -->
      <div
        class="flex justify-between border-y-[1px] p-4 border-white space-x-4"
      >
        <div class="h-4 w-4 bg-sky-600"></div>
        <p>Hotel</p>
        <input type="checkbox" />
      </div>
      <!-- per form input -->
      <div
        class="flex justify-between border-y-[1px] p-4 border-white space-x-4"
      >
        <div class="h-4 w-4 bg-orange-600"></div>
        <p>Apertement</p>
        <input type="checkbox" />
      </div>
      <!-- per form input -->
      <div
        class="flex justify-between border-y-[1px] p-4 border-white space-x-4"
      >
        <div class="h-4 w-4 bg-indigo-600"></div>
        <p>Hostel</p>
        <input type="checkbox" />
      </div>

      <!-- price -->
      <div class="mt-10">
        <h2 class="text-slate-500 mb-6">PRICE</h2>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-200 focus:shadow-outline"
            type="text"
            id="min"
            placeholder="Minimum Price"
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-200 focus:shadow-outline"
            type="text"
            id="max"
            placeholder="Maximum Price"
          />
        </div>
      </div>

      <div class="mt-10">
        <h2 class="text-slate-500 mb-6">City Location</h2>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-200 focus:shadow-outline"
            type="text"
            id="min"
            placeholder="e.g Kediri"
          />
        </div>
      </div>

      <div class="mt-10">
        <h2 class="text-slate-500 mb-6">Accommodation Name</h2>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-200 focus:shadow-outline"
            type="text"
            id="min"
            placeholder="e.g Forrest'in"
          />
        </div>
      </div>

      <button
        class="text-center text-white p-3 rounded-lg bg-indigo-600 hover:bg-indigo-800 w-full"
        type="submit"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>
