<template>
  <div class="container">
    <h1>
      <p class="line-1 anim-typewriter">France 2023</p>

      <br />
      <br />
      <br />
      <br />
      <p>Promo</p>
      <iframe
        class="center"
        width="500"
        height="400"
        v-bind:src="`https://www.youtube.com/embed/${next_rwcs.video_url.split('/').pop()}`"
      ></iframe>
      Game Locations
      <img v-bind:src="next_rwcs.image_url" alt="" class="center" />
    </h1>
  </div>
</template>

<style>
h1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150%;
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
