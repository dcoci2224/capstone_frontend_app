<template>
  <div class="container">
    <p class="line-1 anim-typewriter">RWC Japan 2019</p>
    <br />
    <img v-bind:src="match_results.image_url" alt />
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      match_results: {},
    };
  },
  created: function() {
    axios.get("/api/match_results/").then(response => {
      this.match_results = response.data[0];
    });
  },
};
</script>
