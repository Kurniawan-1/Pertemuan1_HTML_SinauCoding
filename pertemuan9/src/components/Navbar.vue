<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-md">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/cart">Cart</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/log">Log</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background: #7c7c7c;
  padding: 10px 20px;
}

.nav-link {
  color: white;
  font-weight: 700;
  font-size: 22px;
  margin-right: 15px;
}

.nav-link:hover,
:focus {
  text-decoration: underline;
  text-underline-offset: 8px;
}
</style>