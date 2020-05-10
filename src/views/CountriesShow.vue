<template>
  <div class="container">
    <h2>{{ country.name }}</h2>
    <p>{{ country.nickname }}</p>
    <p>World Ranking{{ country.world_ranking }}</p>
    <p>{{ country.video_url }}</p>
    <img v-bind:src="country.image_url" alt />
    <div>
      <button v-on:click="destroyCountry(country)">Destroy country</button>
    </div>
    <router-link to="/countries/">Back to all countries</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      country: {},
    };
  },
  created: function() {
    axios.get("/api/countries/" + this.$route.params.id).then(response => {
      this.country = response.data;
    });
  },
  methods: {
    destroyCountry: function(country) {
      axios.delete("/api/countries/" + country.id).then(response => {
        this.$router.push("/countries");
      });
    },
  },
};
</script>
