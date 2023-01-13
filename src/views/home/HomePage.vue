<template>
  <div class="container">
    <Navbar />
    <Jumbotron />
    <div class="flex justify-between p-14">
      <section>
        <FormSearch />
      </section>
      <section>
        <Card />
      </section>
    </div>
  </div>
</template>

<script>
import Card from "../../components/cards/card.vue";
import Navbar from "../../components/navbar/Navbar.vue";
import Jumbotron from "../../components/jumbotron/Jumbotron.vue";
import FormSearch from "./components/FormSearch.vue";
export default {
  components: {
    Navbar,
    Jumbotron,
    FormSearch,
    Card,
  },
};
</script>
