import authSlice from "./authSlice";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  message: "",
};

const authModule = {
  state: () => ({
    ...initialState,
  }),
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setIsError(state, isError) {
      state.isError = isError;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null || undefined | "";
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await authSlice.fetchUser();
        commit("setUser", response);
      } catch (error) {
        console.log(error);
      }
    },
    async registerUser({ commit }, user) {
      try {
        await authSlice.register(user);
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
    async loginUser({ commit }, user) {
      try {
        const response = await authSlice.login(user);
        commit("setUser", response);
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
    async logoutUser({ commit }) {
      await authSlice.logout();
      commit("clearUser");
    },
  },
};

export default authModule;
