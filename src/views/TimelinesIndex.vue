<template>
  <div class="container">
    <p class="line-1 anim-typewriter">Timeline of previous Finals</p>
    <img v-bind:src="timelines.url" alt />
    <!-- <p>
      <a href="https://giphy.com/gifs/worldrugby-logos-rugby-world-cup-union-w8NiBNGTp2j849QzsL">via GIPHY</a>
    </p> -->
    <iframe
      src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1AW5x29S2PknSuzU3HkwqAHLu3vnB9LKHwkZftKlZVEU&font=Default&lang=en&start_at_end=true&timenav_position=top&debug=true&initial_zoom=2&height=650"
      width="100%"
      height="650"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      frameborder="0"
    ></iframe>
  </div>
</template>

<style>
p {
  font: red;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      timelines: {},
    };
  },
  created: function() {
    axios.get("/api/timelines/").then(response => {
      this.timelines = response.data[0];
    });
  },
};
</script>
