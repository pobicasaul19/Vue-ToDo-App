<script>
import { ref, onMounted } from "vue";
import Loader from "@/components/AppLoader.vue";
import Header from "@/components/AppHeader.vue";
import TodoSidebar from "@/components/TodoSidebar.vue";
import TodoApp from "@/components/TodoApp.vue";
import ClockApp from "@/components/ClockApp.vue";
import CalendarApp from "@/components/CalendarApp.vue";

export default {
  name: "HomeView",
  components: {
    Loader,
    Header,
    TodoSidebar,
    TodoApp,
    ClockApp,
    CalendarApp,
  },
  setup() {
    const loggedIn = ref(true);

    onMounted(() => {
      setTimeout(() => {
        loggedIn.value = false;
      }, 2500);
    });

    return {
      loggedIn,
    };
  },
};
</script>

<template>
  <div v-if="loggedIn">
    <Loader />
  </div>
  <div v-else>
    <Header />
    <div class="app-content">
      <TodoSidebar />
      <TodoApp />
      <div class="app-content-container">
        <ClockApp />
        <CalendarApp />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.app-content {
  display: flex;
  height: 90vh;
  background-color: $app-color;
  overflow: hidden;
  padding: 16px 24px 24px 0;

  &-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;
    height: 100%;
    overflow: hidden;
    padding: 0 24px 24px 24px;
  }
}
</style>
