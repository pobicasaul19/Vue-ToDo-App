import axios from "axios";

const API_URL = "/api/todo/";

const userString = localStorage.getItem("user");
let token = "";
if (userString) {
  const user = JSON.parse(userString);
  token = user.token;
}

// Get user todos
async function getTodos() {
  try {
    if (!token) {
      throw new Error("Token is not available. User may be logged out.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(API_URL, config);

    return response.data;
  } catch (error) {
    if (error.message == !"Token is not available. User may be logged out.") {
      console.error(error);
    }
  }
}

// Create todo
async function createTodo(todoData) {
  try {
    if (!token) {
      throw new Error("Token is not available. User may be logged out.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(API_URL, todoData, config);

    return response.data;
  } catch (error) {
    if (error.message == !"Token is not available. User may be logged out.") {
      console.error(error);
    }
  }
}

// Delete todo
async function deleteTodo(todoID) {
  try {
    if (!token) {
      throw new Error("Token is not available. User may be logged out.");
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(API_URL + todoID, config);

    return response.data;
  } catch (error) {
    if (error.message == !"Token is not available. User may be logged out.") {
      console.error(error);
    }
  }
}

const todoSlice = {
  getTodos,
  createTodo,
  deleteTodo,
};

export default todoSlice;
