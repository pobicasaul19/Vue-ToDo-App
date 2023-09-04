<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo.vue";

export default {
  components: {
    AddTodo,
  },
  computed: {
    ...mapGetters(["todos"]),
    colors() {
      return ["#fee4cb", "#e9e7fd", "#ffd3e2", "#c8f7dc", "#d5deff"];
    },
    reverseColors() {
      return this.colors.slice().reverse();
    },
  },
  created() {
    this.$store.dispatch("getTodos");
  },
  methods: {
    ...mapActions(["deleteTodo", "toggleTodo"]),
    async removeTodo(todoID) {
      try {
        await this.deleteTodo(todoID);
      } catch (error) {
        console.error(error);
      }
    },
    toggle_Todo(todoID) {
      this.toggleTodo(todoID);
    },
    getColors(index) {
      const colors = this.colors;
      const opacity = 0.4;
      const color = colors[index % colors.length];
      return `rgba(${this.hexToRgb(color)}, ${opacity})`;
    },
    getReverseColors(index) {
      const reverse = this.reverseColors;
      const opacity = 0.4;
      const color = reverse[index % reverse.length];
      return `rgba(${this.hexToRgb(color)}, ${opacity})`;
    },
    hexToRgb(hex) {
      const hexCode = hex.replace("#", "");
      const r = parseInt(hexCode.substring(0, 2), 16);
      const g = parseInt(hexCode.substring(2, 4), 16);
      const b = parseInt(hexCode.substring(4, 6), 16);

      return `${r}, ${g}, ${b}`;
    },
  },
};
</script>

<template>
  <div class="project-section">
    <AddTodo />
    <hr />
    <div class="project-section-todo">
      <div class="project-section-todo-header">
        <p>ToDo List {{ todos.length }}</p>
      </div>
      <div class="list">
        <div id="checklist" v-for="(todo, index) in todos" :key="todo._id">
          <div class="container" :style="{ backgroundColor: getColors(index) }">
            <span>{{ new Date(todo.createdAt).toLocaleString("en-US") }}</span>
            <div class="todo">
              <label
                :class="{ completed: todo.completed }"
                @click="toggle_Todo(todo._id)"
                >{{ todo.text }}</label
              >
              <button class="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  @click="removeTodo(todo._id)"
                >
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.project-section {
  flex: 2;
  background-color: $projects-section;
  border-radius: 32px;
  padding: 32px 32px 0 32px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  hr {
    border: 0;
    height: 1.5px;
    background-color: #c3c8de;
    margin: 0;
  }

  &-todo {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
    height: 20vh;
    overflow-y: scroll;
    height: fit-content;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
      height: 50px;
      width: 100%;
      gap: 20px;

      p {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        position: sticky;
      }
    }
  }

  .list {
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    border-radius: 10px;
    position: relative;

    &-list {
      height: auto !important;
    }

    #checklist {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      height: 100%;
      flex-direction: column;
      gap: 1rem;

      .container {
        position: relative;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        flex-direction: column;

        span {
          font-size: 12px;
          color: #979797;
          font-weight: 600;
          margin: 0;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .todo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 140px;
          border-radius: 20px;
          padding: 0 30px;

          input[type="checkbox"] {
            position: relative;
            height: 15px;
            width: 15px;
            outline: none;
            border: 0;
            margin: 0 15px 0 0;
            cursor: pointer;
            background: #fff;
            display: grid;
            align-items: center;
            margin-right: 20px;

            &:before,
            &:after {
              content: "";
              position: absolute;
              height: 2px;
              top: auto;
              border-radius: 2px;
              background-color: #4f29f0;
            }

            &:before {
              width: 0px;
              right: 60%;
              transform-origin: right bottom;
            }

            &:after {
              width: 0px;
              left: 40%;
              transform-origin: left bottom;
            }

            &:checked {
              &:before {
                animation: check-1 0.3s forwards;
              }

              &:after {
                animation: check-2 0.3s forwards;
              }
            }
          }

          label {
            position: relative;
            cursor: pointer;
            display: grid;
            align-items: center;
            width: fit-content;
            transition: color 0.3s ease;
            margin-right: 20px;
            font-size: 20px;

            &:before,
            &:after {
              content: "";
              position: absolute;
            }

            &:before {
              height: 2px;
              left: -100px;
              background: #4f29f0;
              border-radius: 2px;
              transition: background 0.3s ease;
            }

            &:after {
              height: 4px;
              width: 4px;
              top: 8px;
              left: -25px;
              border-radius: 50%;
            }
          }

          .button {
            background: none;
            border: none;
            padding: 15px 15px;
            border-radius: 10px;
            cursor: pointer;

            svg {
              font-size: 20px;
              transition: all 0.3s;

              path {
                fill: #c3c8de;
              }
            }

            &:hover {
              background: rgba(29, 29, 29, 0.062);
              transition: 0.5s;
              animation: shake 0.3s infinite;
            }

            @keyframes shake {
              0% {
                transform: translateX(0);
              }
              25% {
                transform: translateX(-5px);
              }
              50% {
                transform: translateX(0);
              }
              75% {
                transform: translateX(5px);
              }
              100% {
                transform: translateX(0);
              }
            }
          }
        }
      }
    }

    .completed {
      color: #c3c8de;

      &:before {
        background: #c3c8de;
        animation: slice 0.4s ease forwards;
      }
    }

    @keyframes slice {
      60% {
        width: 100%;
        left: 4px;
      }

      100% {
        width: 100%;
        left: -2px;
        padding-left: 0;
      }
    }

    @keyframes check-1 {
      0% {
        width: 4px;
        top: auto;
        transform: rotate(0);
      }

      50% {
        width: 0px;
        top: auto;
        transform: rotate(0);
      }

      51% {
        width: 0px;
        top: 8px;
        transform: rotate(45deg);
      }

      100% {
        width: 5px;
        top: 8px;
        transform: rotate(45deg);
      }
    }

    @keyframes check-2 {
      0% {
        width: 4px;
        top: auto;
        transform: rotate(0);
      }

      50% {
        width: 0px;
        top: auto;
        transform: rotate(0);
      }

      51% {
        width: 0px;
        top: 8px;
        transform: rotate(-45deg);
      }

      100% {
        width: 10px;
        top: 8px;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
