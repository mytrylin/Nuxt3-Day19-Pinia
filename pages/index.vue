<script setup>
import { rooms } from '@/composables/useRooms'

const bookingStore = useBookingStore()
const { bookingResult } = storeToRefs(bookingStore)
const router = useRouter()
const bookingSessionId = ref('')
const iRoom = ref({})
const roomsList = ref(rooms)

const userInfo = ref({
  name: '',
  phone: '',
  email: '',
})

const resetUserInfo = () => {
  userInfo.value = {
    name: '',
    phone: '',
    email: '',
  }
  bookingSessionId.value = ''
}

const makeBookingSessionId = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length){
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

const reservationRoom = (roomInfo) => {
  iRoom.value = roomInfo
  resetUserInfo()
}

const submitOrder = (roomInfo, userInfo) => {
  bookingSessionId.value = makeBookingSessionId(11)
  bookingResult.value = {
    ...roomInfo,
    user: {
      ...userInfo,
    },
    bookingSessionId: bookingSessionId.value
  };
  router.push("/order")
}
</script>

<template>
  <div class="flex flex-col gap-5 m-3">
    <div
      class="card flex flex-col md:flex-row content-center items-center gap-3
        border border-solid border-sky-500 p-5 rounded-lg
        text-gray-700
        hover:border-sky-200 
      "
      v-for="room in roomsList"
      :key="room.id"
    >
      <div class="img">
        <img
          :src="room.imageUrl"
          class="card-img"
          :alt="room.name"
        />
      </div>
      
      <div class="txt flex flex-col">
        <div class="mb-4">
          <h2 class="text-3xl">{{ room.name }}</h2>
          <p class="mt-9 mb-5">
            <span class="border border-solid border-lime-500 rounded-lg
              p-1 mr-1 text-lime-700 bg-lime-50 cursor-pointer
              hover:text-lime-800 hover:bg-lime-100 hover:border-lime-700
            "
              v-for="(item, index) in room.roomDetails">{{ item }}</span>
          </p>
          <p class="text-lg">
            <strong>價格:{{ room.price }}</strong>
          </p>
          <button
            type="button"
            class="text-lg border border-solid border-sky-400 rounded-lg cursor-pointer
              p-1 text-sky-500
              hover:text-sky-600 hover:bg-sky-100 hover:border-sky-600
            "
            @click="reservationRoom(room)"
          >
            立即訂房
          </button>
        </div>

        <div class="booking" v-if="iRoom.id && (room.id === iRoom.id)">
          <h3 class="text-2xl mb-3">訂房資訊</h3>
          <p class="text-xl text-blue-400 mb-2">
            {{ iRoom.name }}
          </p>
          <section class="">
            <h3>訂房人資訊</h3>
            <form class="">
              <div class="">
                <label for="name" class="mr-11"
                  >姓名</label
                ><input
                  id="name"
                  type="text"
                  class=""
                  placeholder="請輸入姓名"
                  name="name"
                  v-model="userInfo.name"
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="mr-3"
                  >手機號碼</label
                ><input
                  id="phone"
                  type="tel"
                  class=""
                  placeholder="請輸入手機號碼"
                  name="phone"
                  v-model="userInfo.phone"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="mr-3"
                  >電子信箱</label
                ><input
                  id="email"
                  type="email"
                  class=""
                  placeholder="請輸入電子信箱"
                  name="email"
                  v-model="userInfo.email"
                />
              </div>
            </form>
          </section>

          <button
            class="text-lg border border-solid border-red-400 rounded-lg cursor-pointer
              p-1 text-red-500
              hover:text-red-600 hover:bg-red-100 hover:border-red-600
            "
            @click="submitOrder(iRoom, userInfo)"
          >
            確認訂房
          </button>
        </div>

      </div>
    </div>


  </div>
</template>

<style scoped>
.card-img {
  max-width: 100%;
}
@media (min-width: 768px) {
  .card-img {
    max-width: 600px;
  }
}
</style>