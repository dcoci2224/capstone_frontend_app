<template>
  <div class="container">
    <img v-bind:src="pools.image_url" alt />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      pools: {},
    };
  },
  created: function() {
    axios.get("/api/pools/").then(response => {
      this.pools = response.data[0];
    });
  },
};
</script>
