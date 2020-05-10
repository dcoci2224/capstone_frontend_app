<template>
  <div class="container">
    <h1>RWC Countries</h1>
    <div v-for="country in countries">
      <h2>{{ country.name }}</h2>
      <p>{{ country.nickname }}</p>
      <p>World Ranking {{ country.world_ranking }}</p>
      <!-- <p>{{ country.image_url }}</p> -->
      <router-link v-bind:to="`/countries/${country.id}`">More details</router-link>
      <p>{{ country.video_url }}</p>
      <img v-bind:src="country.image_url" alt />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      countries: [],
    };
  },
  created: function() {
    axios.get("/api/countries").then(response => {
      console.log(response);
      this.countries = response.data;
    });
  },
  methods: {
    indexCountries: function() {
      axios.get("/api/countries").then(response => {
        console.log("Get all countries: ", response);
        this.countries = response.data;
      });
    },
  },
};
</script>
