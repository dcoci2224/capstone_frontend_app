<template>
  <div class="container">
    <h1>New Country</h1>
    <form v-on:submit.prevent="createCountry()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newCountryName" />
      Nickname:
      <input type="text" v-model="newCountryNickname" />
      World Ranking:
      <input type="text" v-model="newCountryWorldRanking" />
      Image Url:
      <input type="text" v-model="newCountryImageUrl" />
      Video Url:
      <input type="text" v-model="newCountryVideoUrl" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newCountryName: "",
      newCountryNickname: "",
      newCountryWorldRanking: "",
      newCountryImageUrl: "",
      newCountryVideoUrl: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createCountry: function() {
      var params = {
        name: this.newCountryName,
        nickname: this.newCountryNickname,
        world_ranking: this.newCountryWorldRanking,
        image_url: this.newCountryImageUrl,
        video_url: this.newCountryVideoUrl,
      };
      axios
        .post("/api/countries", params)
        .then(response => {
          this.$router.push("/countries");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
