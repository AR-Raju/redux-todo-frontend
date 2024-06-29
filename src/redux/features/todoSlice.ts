import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

export interface TodoState {
  todos: TTodo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //     increment: (state) => {
    //       // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //       // doesn't actually mutate the state because it uses the Immer library,
    //       // which detects changes to a "draft state" and produces a brand new
    //       // immutable state based off those changes
    //       state.value += 1;
    //     },
    //     decrement: (state) => {
    //       state.value -= 1;
    //     },
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      todo!.isCompleted = !todo?.isCompleted;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
