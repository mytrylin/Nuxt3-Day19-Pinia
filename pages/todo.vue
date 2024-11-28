<script setup>
// 取得 stores/todo.js 定義的 useTodoStore
const todoStore = useTodoStore();

// actions 的方法可以直接解構
const { addTodo, removeTodo } = todoStore;

// state 資料和 getters 具有響應性，需經過 storeToRefs 解構
const { todoList, todoQuantity } = storeToRefs(todoStore);

const newTodo = ref("");

// 新增 Todo
const addNewTodo = () => {
  if (newTodo.value) {
    addTodo(newTodo.value);
    newTodo.value = "";
  }
};

// 移除 Todo
const deleteTodo = (id) => {
  removeTodo(id);
};
</script>
<template>
  <div class="">
    <div class="">
      <div class="">
        <h1 class="">Todo List</h1>
        <div class="">
          <input
            v-model.trim="newTodo"
            class=""
            placeholder="新增待辦事項"
          />
          <button
            @click="addNewTodo"
            class=""
            :disabled="!newTodo.length"
          >
            新增 Todo
          </button>
        </div>
        <ul class="">
          <li
            v-for="todo in todoList"
            :key="todo.id"
            class=""
          >
            <span>
              {{ todo.text }}
            </span>
            <button @click="deleteTodo(todo.id)" class="">
              刪除
            </button>
          </li>
        </ul>

        <p class="">{{ todoQuantity }}</p>
      </div>
    </div>
  </div>
</template>
