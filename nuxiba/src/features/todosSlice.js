
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  return response.data.sort((a, b) => b.id - a.id);  // Ordenar por id de mayor a menor
});

export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.unshift(action.payload);  // Agregar la nueva tarea al principio
      });
  }
});

export default todosSlice.reducer;
