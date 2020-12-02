import { DELETE_TODO, ADD_TODO, UPDATE_TODO, SAVE_TODO, COMPLETE_TODO } from "./types";

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const saveTodo = (todoToUpdate) => {
  return {
    type: SAVE_TODO,
    payload: todoToUpdate,
  };
};

export const updateTodo = (updated) => {
  return {
    type: UPDATE_TODO,
    payload: updated,
  };
};
