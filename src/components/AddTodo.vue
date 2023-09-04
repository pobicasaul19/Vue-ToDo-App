<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions(["createTodo"]),
    async addNewTodo() {
      try {
        await this.createTodo({
          text: this.text,
        });
        this.text = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="project-section-header">
    <p>Create ToDo</p>
    <form @submit.prevent="addNewTodo()">
      <div class="input_container">
        <input
          class="input_field"
          type="text"
          v-model="text"
          name="text"
          placeholder=""
        />
        <label class="input_label" for="">ToDo Task</label>
      </div>
      <button class="button" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
        <span>Add new Task</span>
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.project-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  color: $main-color;

  p {
    font-size: 34px;
    line-height: 32px;
    font-weight: 700;
    opacity: 0.9;
    margin: 0;
  }

  form {
    display: flex;
    width: 100%;
    max-width: 500px;

    .input_container {
      position: relative;
      width: 100%;

      .input_label {
        font-size: 14px;
        color: rgb(99, 102, 102);
        position: absolute;
        top: -10px;
        left: 10px;
        background-color: #fff;
        transition: all 0.3s ease;
      }

      .input_field {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 20px;
        outline: 0;
        width: 95%;
        background-color: transparent;

        &:focus {
          border-color: #3366cc;
        }
      }

      .input_field:placeholder-shown + .input_label {
        top: 10px;
        background-color: transparent;
      }

      .input_field:focus + .input_label {
        top: -10px;
        left: 10px;
        background-color: #fff;
        color: #3366cc;
        font-weight: 600;
        font-size: 14px;
      }
    }

    .button {
      background-color: #3366cc;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px;
      font-size: 16px;
      width: 50%;
      height: 40px;
      margin: 0 auto;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        margin-right: 10px;
        transition: all 0.3s ease;

        path {
          fill: #fff;
        }
      }

      &:hover {
        background-color: #27408b;
        svg {
          rotate: -90deg;
        }
      }
    }
  }
}
</style>
