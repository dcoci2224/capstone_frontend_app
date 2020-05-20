<template>
  <div class="container">
    <h1>
      <strong>France 2023</strong>
      <div>
        Game Locations
        <img v-bind:src="next_rwcs.image_url" alt />
        <br />
        <br />
        <br />
        Promo
        <iframe
          width="500"
          height="400"
          v-bind:src="`https://www.youtube.com/embed/${next_rwcs.video_url.split('/').pop()}`"
        ></iframe>
      </div>
    </h1>
  </div>
</template>

<style>
h1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      next_rwcs: {},
    };
  },
  created: function() {
    axios.get("/api/next_rwcs/").then(response => {
      this.next_rwcs = response.data[0];
    });
  },
};
</script>
