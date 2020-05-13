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
    <div class="form-group">
      <label>Name:</label>
      <input type="text" class="form-control" v-model="country.name" />
    </div>
    <div class="form-group">
      <label>Nickname:</label>
      <input type="text" class="form-control" v-model="country.nickname" />
    </div>
    <div class="form-group">
      <label>World Ranking:</label>
      <input type="text" class="form-control" v-model="country.world_ranking" />
    </div>
    <div class="form-group">
      <label>Image Url:</label>
      <input type="text" class="form-control" v-model="country.image_url" />
    </div>

    <div class="form-group">
      <label>Video Url:</label>
      <input type="text" class="form-control" v-model="country.video_url" />
    </div>

    <div>
      <input type="submit" class="btn btn-primary" value="Update" />
    </div>
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
        name: this.name,
        nickname: this.nickname,
        world_ranking: this.worldRanking,
        image_url: this.image_url,
        video_url: this.video_url,
      };
      axios
        .patch("/api/countries/" + this.$route.params.id, params)
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
