<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const sumAmount = route.query.sumAmount;
const sumPrice = route.query.sumPrice;
const customerName = route.query.customer;

console.log(route.query.sumPrice);
</script>

<template>
    <div>
    <h1>Payment</h1>
    <p>
        Total pembayaran yang harus dibayarkan {{ customerName }} dari
        {{ sumAmount }} items sebesar <br />
        Rp. {{ sumPrice }},00
    </p>
    <button type="button" @click="router.back()">Back</button>
    </div>
</template>

<style scoped>
div {
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 10px;
}
</style>