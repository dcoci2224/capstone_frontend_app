<template>
  <div class="container">
    <img v-bind:src="match_results.image_url" alt />
  </div>
</template>

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
