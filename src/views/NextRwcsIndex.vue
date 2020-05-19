<template>
  <div class="container">
    <h1>The 2023 Rugby World Cup will be Hosted by France</h1>
    <img v-bind:src="next_rwcs.image_url" alt />
    <div>
      <iframe
        width="500"
        height="400"
        v-bind:src="`https://www.youtube.com/embed/${next_rwcs.video_url.split('/').pop()}`"
      ></iframe>
    </div>
  </div>
</template>

<style>
/* body {
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  background-image: url("https://enginegroup.com/uk/wp-content/uploads/2019/10/JP-Rugby-worldcup-01.jpg");
} */
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
