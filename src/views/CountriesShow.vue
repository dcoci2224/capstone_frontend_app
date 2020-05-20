<template>
  <div class="container">
    <img v-bind:src="country.image_url" alt="" height="400" width="650" />
    <h2>{{ country.name }}</h2>
    <p>{{ country.nickname }}</p>
    <p>World Ranking: {{ country.world_ranking }}</p>
    <iframe
      width="420"
      height="315"
      v-bind:src="`https://www.youtube.com/embed/${country.video_url.split('/').pop()}`"
    ></iframe>
    <!-- <p>{{ country.products }}</p> -->
    <div v-for="product in country.products">
      <h4>
        <strong>{{ product.name }}</strong>
      </h4>
      <img v-bind:src="product.image_url" alt="" height="400" width="300" />
      <button v-on:click="createCartedProduct(product)">Add to cart</button>
    </div>

    <!-- <div>
      <button v-on:click="destroyCountry(country)">Destroy country</button>
    </div>
    <router-link v-bind:to="`/countries/${country.id}/edit`">Edit country</router-link>
    | -->
    <div>
      <router-link to="/">Back to home page</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      country: { video_url: "" },
      carted_product: {},
      products: {},
    };
  },
  created: function() {
    axios.get("/api/countries/" + this.$route.params.id).then(response => {
      this.country = response.data;
    });
    // axios.get("/api/carted_products/" + this.$route.params.id).then(response => {
    //   this.carted_product = response.data;
    // });
  },
  methods: {
    createCartedProduct: function(product) {
      var params = { product_id: product.id };
      axios.post("/api/carted_products/", params).then(response => {
        this.$router.push("/carted_products");
      });
    },
    destroyCountry: function(country) {
      axios.delete("/api/countries/" + country.id).then(response => {
        this.$router.push("/countries");
      });
    },
  },
};
</script>
