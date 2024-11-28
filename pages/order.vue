<script setup>
const bookingStore = useBookingStore()
const { bookingResult } = storeToRefs(bookingStore)
</script>

<template>
  <div class="container mt-5">
    <template v-if="bookingResult.name">
      <div class="flex-row">
        <div class="col-lg-4">
          <h2 class="mb-3 text-2xl text-red-700">預訂成功 !</h2>
          <h2 class="mb-3 text-2xl text-red-300">
            您的訂房隨機序號: <span class="text-red-900">{{ bookingResult.bookingSessionId }}</span></h2>
          <h3 class="mb-3 text-xl">訂房人資訊</h3>
          <label class="flex">
            <h4>姓名</h4>
            <p class="text-gray-800 ml-11">{{ bookingResult.user.name }}</p>
          </label>
          <label class="flex">
            <h4>手機號碼</h4>
            <p class="text-gray-800 ml-3">{{ bookingResult.user.phone }}</p>
          </label>
        </div>
        <div class="mt-5">
          <h3 class="mb-3 text-xl">房型資訊</h3>
          <p class="mb-3 text-sky-700 text-2xl">
            {{ bookingResult.name }}
          </p>
          <section class="mb-5">
            <h3 class="mb-3 text-xl">房型基本資訊</h3>
            <p class="mt-9 mb-5">
              <span class="border border-solid border-lime-500 rounded-lg
                p-1 mr-1 text-lime-700 bg-lime-50 cursor-pointer
                hover:text-lime-800 hover:bg-lime-100 hover:border-lime-700
              "
                v-for="(item, index) in bookingResult.roomDetails">{{ item }}</span>
            </p>
          </section>
        </div>
      </div>
    </template>

    <template v-else>
      <h1 class="text-orange-500 text-3xl mb-7">目前沒有預訂資訊</h1>
    </template>

    <NuxtLink to="/"
      class="text-lg border border-solid border-gray-600 rounded-lg cursor-pointer
                p-1 text-gray-600
                hover:text-gray-800 hover:bg-gray-100 hover:border-gray-700
              "
    >回上一頁</NuxtLink>
  </div>
</template>

<style scoped></style>
