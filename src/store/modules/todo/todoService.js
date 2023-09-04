import todoSlice from "./todoSlice";

const initialState = {
  todos: todoSlice.getTodos(),
  isError: false,
  message: "",
};

const todoModule = {
  state: () => ({
    ...initialState,
  }),
  getters: {
    todos: (state) => state.todos,
  },
  mutations: {
    setIsError(state, isError) {
      state.isError = isError;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodos(state, todo) {
      state.todos.push(todo);
    },
    toggleTodos(state, todoID) {
      const todo = state.todos.find((todo) => todo._id === todoID);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodos(state, todoID) {
      state.todos = state.todos.filter((todo) => todo._id !== todoID);
    },
  },
  actions: {
    async getTodos({ commit }) {
      try {
        const response = await todoSlice.getTodos();
        commit("setTodos", response);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        commit("setIsError", message);
        commit("setMessage", true);
      }
    },
    async createTodo({ commit }, todoData) {
      try {
        const response = await todoSlice.createTodo(todoData);
        commit("addTodos", response);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        commit("setIsError", message);
        commit("setMessage", true);
      }
    },
    async deleteTodo({ commit }, todoID) {
      try {
        await todoSlice.deleteTodo(todoID);
        commit("deleteTodos", todoID);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        commit("setIsError", message);
        commit("setMessage", true);
      }
    },
    toggleTodo({ commit }, todoID) {
      try {
        commit("toggleTodos", todoID);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        commit("setIsError", message);
        commit("setMessage", true);
      }
    },
  },
};

export default todoModule;
