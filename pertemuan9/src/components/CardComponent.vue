<script setup>
import { useCartStore } from "../store/cartStore.js";
import { storeToRefs } from "pinia";
const store = useCartStore();

const props = defineProps({
  isCartPage: {
    type: Boolean,
    default: true,
  },
});

const { product, cartItem } = storeToRefs(store);
const { addCartItem, deleteCartItem } = store;

let itemShow = props.isCartPage ? product.value : cartItem.value;
let buttonText = props.isCartPage ? "Add" : "Remove";
</script>


<template>
  <div class="d-flex gap-3 flex-wrap justify-content-center">
    <div class="card" v-for="data in itemShow" :key="data.id">
      <p>{{ data.title }}</p>
      <button @click="isCartPage ? addCartItem(data) : deleteCartItem(data)">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
  width: 16vw;
  max-height: 50vh;
  background: #d1d1d1;
}
</style>