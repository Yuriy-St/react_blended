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
    editTodo:(state,{payload})=>{
      state.todos=state.todos.map((todo)=>{
      if(todo.id===payload.id){
return payload;
      }
      return todo;
    });
    }
  },
});

export const { addTodo, deleteTodo,editTodo } = todoSlice.actions;
export default todoSlice.reducer;
