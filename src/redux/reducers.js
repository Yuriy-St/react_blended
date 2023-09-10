import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
