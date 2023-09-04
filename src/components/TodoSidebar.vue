<script>
export default {
  // Create logout method
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
      this.$router.push({ name: "\u2015 Log-in" });
    },
  },
};
</script>

<template>
  <div class="app-sidebar">
    <div class="app-sidebar-up">
      <a href="" class="app-sidebar-link active">
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
          class="feather feather-home"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </a>
      <a href="" class="app-sidebar-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="feather feather-pie-chart"
          viewBox="0 0 24 24"
        >
          <defs />
          <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
        </svg>
      </a>
      <a href="" class="app-sidebar-link">
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
          class="feather feather-calendar"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </a>
      <a href="" class="app-sidebar-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="feather feather-settings"
          viewBox="0 0 24 24"
        >
          <defs />
          <circle cx="12" cy="12" r="3" />
          <path
            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
          />
        </svg>
      </a>
    </div>
    <button class="app-sidebar-down">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logout">
        <path
          d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
        ></path>
      </svg>
      <router-link to="/login" @click="logout()">Log out</router-link>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.app {
  &-sidebar {
    padding: 40px 16px;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 250px;

    &-link {
      color: $main-color;
      margin: 16px 0;
      transition: 0.2s;
      border-radius: 50%;
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: $link-color-hover;
        color: $link-color-active;
      }

      &.active {
        background-color: $link-color-active-bg;
        color: $link-color-active;
      }
    }

    &-down {
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 15px;
      opacity: 0.7;
      border-top: 2px solid #c0c0c0;
      padding-top: 20px;
      svg {
        margin-right: 8px;
        width: 20px;
        height: 20px;
      }

      &:hover {
        opacity: 1;
      }

      a {
        text-decoration: none;
        color: $main-color;
      }
    }
  }
}
</style>
