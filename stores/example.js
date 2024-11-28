export const useExampleStore = defineStore("example", {
  state: () => ({
    //資料狀態
    message: "message",
  }),
  actions: {
    // store 的方法
    // 更新 message 的方法
    writeMessage(messageText) {
      this.message = messageText;
    },
  },
  getters: {
    // store 的計算屬性
    // 根據 message 資料計算長度
    countMessageLength: (state) =>
      // 從 store 的 state 取出 message 屬性的資料
      ` this.message : ${state.message.length} 共有幾個字`, 
  },
});