import { createSlice } from "@reduxjs/toolkit";

interface TodoSliceState {
    count: number;
    todos: Array<string>;
}
const initialState: TodoSliceState = {
    count: 0,
    todos: ["line1", "line2", "line3"],
};

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState,
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        removeLastTodod(state) {
            state.todos.pop();
        },
    },
});

export default toolkitSlice.reducer;
export const { increment, decrement, addTodo, removeLastTodod } = toolkitSlice.actions;
