export const useTodoStore = defineStore("todo", () => {
  // 定義 state
  const todoList = ref([]);

  // 定義 actions
  // 新增待辦事項
  const addTodo = (todo) => {
    todoList.value.push({
      id: Date.now(),
      text: todo,
    });
  };
  // 刪除待辦事項
  const removeTodo = (id) => {
    const todoIndex = todoList.value.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      todoList.value.splice(todoIndex, 1);
    }
  };

  // 定義 getters
  const todoQuantity = computed(
    () => `總共有 ${todoList.value.length} 個待辦事項`
  );
  // 回傳 store 的 state, actions 和 getters ，供外部取用
  return {
    todoList,
    addTodo,
    removeTodo,
    todoQuantity,
  };
});