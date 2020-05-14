<template>
  <div class="container">
    <h1>Shopping Cart</h1>
    <div v-for="carted_product in carted_products">
      <h2>{{ carted_product.product.name }}</h2>
      <p>{{ carted_product.quantity }}</p>
      <p>{{ carted_product.product.image_url }}</p>
      <div>
        <router-link to="/countries/">Back to all countries</router-link>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      carted_products: [],
    };
  },
  created: function() {
    axios.get("/api/carted_products").then(response => {
      console.log(response);
      this.carted_products = response.data;
    });
  },
  methods: {
    indexCartedProducts: function() {
      axios.get("/api/carted_products").then(response => {
        console.log("Get all carted_products: ", response);
        this.carted_products = response.data;
      });
    },
  },
};
</script>
