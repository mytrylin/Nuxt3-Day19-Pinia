<script setup lang="ts"></script>

<template>
  <h1>Page: 首頁</h1>
  <div class="main">
    <span>Page: index</span><br>
    <NuxtLink to="/admin" >Admin</NuxtLink><br>
    <NuxtLink :to="`/product/${1}`">product 1</NuxtLink><br>
    <NuxtLink to="/todo" >todo</NuxtLink><br>
  </div>
</template>

<style scoped>
.main {
  padding: 11%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
