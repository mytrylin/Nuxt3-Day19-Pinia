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
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="text-center mb-4">Todo List</h1>
        <div class="input-group mb-3">
          <input
            v-model.trim="newTodo"
            class="form-control"
            placeholder="新增待辦事項"
          />
          <button
            @click="addNewTodo"
            class="btn btn-primary"
            :disabled="!newTodo.length"
          >
            新增 Todo
          </button>
        </div>
        <ul class="list-group">
          <li
            v-for="todo in todoList"
            :key="todo.id"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {{ todo.text }}
            </span>
            <button @click="deleteTodo(todo.id)" class="btn btn-danger btn-sm">
              刪除
            </button>
          </li>
        </ul>

        <p class="mt-3">{{ todoQuantity }}</p>
      </div>
    </div>
  </div>
</template>
