<script setup>
import CardComponent from "../components/CardComponent.vue";
import { useCartStore } from "../store/cartStore.js";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { count } = storeToRefs(store);
</script>

<template>
  <div>
    <h2>This is Cart Page</h2>
    <p>Item for Sale</p>
    <p>Total Item : {{ count }}</p>

    <CardComponent :isCartPage="true" />
  </div>
</template>