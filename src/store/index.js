import { createStore } from "vuex";
import authServices from "../store/modules/auth/authService";
import todoServices from "../store/modules/todo/todoService";

export default createStore({
  modules: {
    auth: authServices,
    todo: todoServices,
  },
});
