<template>
  <div class="container">
    <h2>{{ country.name }}</h2>
    <p>{{ country.nickname }}</p>
    <p>World Ranking{{ country.world_ranking }}</p>
    <p>{{ country.video_url }}</p>
    <!-- <p>{{ country.products }}</p> -->
    <div v-for="product in country.products">
      <h4>{{product.name}}</h4>
      <button v-on:click="createCartedProduct(product)">Add to cart</button>
    </div>
    <br>
    <img v-bind:src="country.image_url" alt />
    </br>
    <!-- <div>
      <button v-on:click="destroyCountry(country)">Destroy country</button>
    </div>
    <router-link v-bind:to="`/countries/${country.id}/edit`">Edit country</router-link>
    | -->
    <div>
      <router-link to="/countries/">Back to all countries</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      country: {},
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
      var params = {product_id: product.id}
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
}
</script>