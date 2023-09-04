<script>
import { mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<template>
  <div class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">ToDo Task Tracker</p>
      <div class="app-search-wrapper">
        <input class="search-input" type="text" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>
    <div class="app-header-right">
      <button class="mode-switch" title="Swicth Theme">
        <svg
          class="moon"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      <button class="notification-btn">
        <span>3</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>
      <button class="profile-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 29 29"
          id="user"
        >
          <path
            d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z"
          />
        </svg>
        <span>{{ user.name }}</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.app {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 34px;
    position: relative;

    &-left,
    &-right {
      display: flex;
      align-items: center;
    }

    &-left {
      flex-grow: 1;
    }

    &-right {
      button {
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
      }

      .mode-switch {
        margin-right: 16px;
      }

      .notification-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $main-color;
        padding: 0;
        border: 0;
        background-color: transparent;
        height: 32px;
        margin-right: 16px;

        span {
          position: absolute;
          background-color: $main-color;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          right: -6px;
          top: -6px;
        }
      }

      .profile-btn {
        padding: 0;
        background: transparent;
        display: flex;
        align-items: center;

        svg {
          width: 32px;
          height: 32px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 4px;
        }

        span {
          color: $main-color;
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
        }
      }
    }
  }

  &-icon {
    width: 26px;
    height: 2px;
    position: relative;
    background-color: $main-color;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 2px;
      background-color: $main-color;
      border-radius: 4px;
      left: 50%;
      transform: translate(-50%);
    }

    &:before {
      top: -6px;
    }

    &:after {
      bottom: -6px;
    }
  }

  &-name {
    color: $main-color;
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 32px;
  }

  &-search-wrapper {
    border-radius: 20px;
    padding-right: 12px;
    background-color: $search-background;
    color: $light-font;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;

    .search-input {
      background-color: $search-background;
      color: $main-color;
      border: none;
      flex: 1;
      outline: none;
      height: 100%;
      padding: 0 20px;
      font-size: 16px;

      &::placeholder {
        color: $main-color;
        opacity: 0.5;
      }
    }
  }
}
</style>
