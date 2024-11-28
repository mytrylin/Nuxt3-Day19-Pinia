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

const createOrder = (roomInfo, userInfo) => {
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
  <div class="">
    <div class="">
      <div class="">
        <div
          class=""
          v-for="room in roomsList"
          :key="room.id"
        >
          <div class="">
            <div class="">
              <img
                :src="room.imageUrl"
                class="card-img-top"
                :alt="room.name"
              />
            </div>
            <div class="">
              <div class="">
                <h2 class="">{{ room.name }}</h2>
                <p class="">
                  <span v-for="(item, index) in room.roomDetails">{{ item }}</span>
                </p>
                <p class="">
                  <strong>價格:{{ room.price }}</strong>
                </p>
                <button
                  type="button"
                  class=""
                  @click="reservationRoom(room)"
                >
                  立即訂房
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" v-if="iRoom.id">
        <h3 class="">訂房資訊</h3>
        <p class="">
          {{ iRoom.name }}
        </p>
        <hr />
        <section class="">
          <h3>訂房人資訊</h3>
          <form class="">
            <div class="">
              <label for="name" class=""
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
              <label for="phone" class=""
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
              <label for="email" class=""
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
        <section class="">
          <h3>房型基本資訊</h3>
          <div v-for="(item, index) in iRoom?.roomDetails">{{ item }}</div>
        </section>
        <button
          class=""
          @click="createOrder(iRoom, userInfo)"
        >
          確認訂房
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  max-width: 600px;
}
</style>