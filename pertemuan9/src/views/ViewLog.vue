<script setup>
import CardComponent from "../components/CardComponent.vue";
import { useCartStore } from "../store/cartStore.js";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useCartStore();
const { count } = storeToRefs(store);

const message = computed(() => {
  return count.value > 0 ? "" : "There is nothing in your cart";
});
</script>

<template>
  <div>
    <h2>This Cart Log Page</h2>
    <p>Total item in Cart : {{ count }}</p>
    <p class="fw-normal fs-3">{{ message }}</p>
    <CardComponent :isCartPage="false" />
  </div>
</template>