<template>
  <div class="bg-white rounded-lg shadow-md w-[18rem] pb-3">
    <img :src="data.image" alt="foto hotel" class="w-[18rem] rounded-t-lg" />
    <div class="pl-6 pr-6 mt-4">
      <h3 class="text-lg font-medium">{{ data.name }}</h3>
      <p class="mt-4 text-gray-600">
        {{ formatText(data.description) }}
      </p>

      <h3 class="font-small mt-3 italic">location:</h3>
      <div class="flex">
        <p class="my-2 mr-3 text-gray-600">City:</p>
        <p class="my-2">{{ data.city }}</p>
      </div>
      <div class="flex">
        <p class="my-2 mr-3 text-gray-600">Province:</p>
        <p class="my-2">{{ data.province }}</p>
      </div>
      <div class="mt-4">
        <button
          class="bg-amber-300 text-black py-2 px-4 rounded-lg hover:bg-amber-400"
        >
          lihat Kamar
        </button>
        <button
          class="ml-4 bg-green-300 text-black py-2 px-4 rounded-lg hover:bg-green-400"
        >
          Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatText } from "../../helpers/textlengthformat/formater";
export default {
  props: ["data"],
  methods: {
    formatText,
  },
};
</script>
