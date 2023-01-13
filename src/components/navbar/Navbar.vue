<template>
  <nav class="h-14 mb-8">
    <div class="flex justify-between">
      <div class="w-[200px] text-center mt-3 flex">
        <div class="rounded-full bg-amber-300 w-4 h-4 mt-4 mr-2"></div>
        <a class="text-4xl text-indigo-600 font-latin">RentRoom</a>
        <div class="rounded-full bg-amber-300 w-4 h-4 mt-4 ml-1"></div>
      </div>

      <div class="flex">
        <ul class="flex mt-5">
          <RouterLink class="inline block mx-7 text-indigo-500" to="/"
            >My Home</RouterLink
          >
          <RouterLink class="inline block mx-7 text-indigo-500" to="/login"
            >Sing in</RouterLink
          >
          <li class="inline block mx-7 text-indigo-500">Sing Up</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
</script>
