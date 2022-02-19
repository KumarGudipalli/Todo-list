import { createSlice } from '@reduxjs/toolkit'

const initialState = {
todolist:[]
}

const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
      saveTodo: (state,action) => {
          state.todolist.push(action.payload)
      },
      setCheck: (state,action) => {
        state.todolist.map(item => {
          if(action.payload === item.id) {
           if(item.done === true) {
             item.done = false
             
           } else {
             item.done = true
           }
          }
        })
      }
  }

});

export const {saveTodo,setCheck} = todoslice.actions
export const selectTodoList = state =>state.todos.todolist
export default todoslice.reducer