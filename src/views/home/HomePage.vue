<template>
  <div class="container">
    <Navbar />
    <Jumbotron />
    <div class="flex justify-between p-14">
      <section>
        <FormSearch />
      </section>
      <section class="flex flex-wrap w-full ml-4 pl-4 pt-10 space-x-6">
        <Card v-for="item in hotels" :key="item.id" :data="item" />
      </section>
    </div>
  </div>
</template>

<script>
import Card from "../../components/cards/card.vue";
import Navbar from "../../components/navbar/Navbar.vue";
import Jumbotron from "../../components/jumbotron/Jumbotron.vue";
import FormSearch from "./components/FormSearch.vue";
import { instance } from "../../helpers/axios/axios";
export default {
  data() {
    return {
      hotels: [],
    };
  },
  methods: {
    async getAllDataHotel() {
      try {
        const data = await instance.get("/hotels");
        if (data) {
          this.hotels = data.data;
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getAllDataHotel();
  },
  components: {
    Navbar,
    Jumbotron,
    FormSearch,
    Card,
  },
};
</script>
