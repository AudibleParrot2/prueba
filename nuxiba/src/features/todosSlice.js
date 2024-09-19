// src/features/todosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  return { userId, todos: response.data.sort((a, b) => b.id - a.id) };
});

export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todosByUser: {} // Un objeto que almacena los todos por userId
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const { userId, todos } = action.payload;
        state.todosByUser[userId] = todos;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        const newTodo = action.payload;
        if (!state.todosByUser[newTodo.userId]) {
          state.todosByUser[newTodo.userId] = [];
        }
        state.todosByUser[newTodo.userId].unshift(newTodo);  // Agregar la nueva tarea al principio
      });
  }
});

export default todosSlice.reducer;
