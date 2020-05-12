<template>
  <div class="container">
    <h1>Edit Country</h1>
    <form v-on:submit.prevent="updateCountry(country)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="country.name" />
      Nickname:
      <input type="text" v-model="country.nickname" />
      World Ranking:
      <input type="text" v-model="country.world_ranking" />
      Image Url:
      <input type="text" v-model="country.image_url" />
      Video Url:
      <input type="text" v-model="country.video_url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      country: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/countries/" + this.$route.params.id).then(response => {
      this.country = response.data;
    });
  },
  methods: {
    updatecountry: function(country) {
      var params = {
        name: country.name,
        nickname: country.nickname,
        world_ranking: country.worldRanking,
        image_url: country.image_url,
        video_url: country.video_url,
      };
      axios
        .patch("/api/countries/" + country.id, params)
        .then(response => {
          this.$router.push("/countries");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
