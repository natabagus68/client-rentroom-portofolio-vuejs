<template>
  <div>
    <form>
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
