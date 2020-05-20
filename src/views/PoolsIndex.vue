<template>
  <div class="container">
    <a id="Pools_page"></a>
    <img v-bind:src="pools.image_url" alt />
    <!-- <p>
      <a href="https://giphy.com/gifs/worldrugby-logos-rugby-world-cup-union-w8NiBNGTp2j849QzsL">via GIPHY</a>
    </p> -->
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
