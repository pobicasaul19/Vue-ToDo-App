<script>
import moment from "moment";

export default {
  data() {
    return {
      current: moment().startOf("week"),
    };
  },
  computed: {
    days() {
      const startOf = this.current.clone().startOf("month").startOf("week");
      const endOf = this.current.clone().endOf("month").endOf("week");
      const days = [];

      for (
        let day = startOf.clone();
        day.isSameOrBefore(endOf);
        day.add(1, "day")
      ) {
        days.push({ date: day.clone() });
      }

      return days;
    },
    formattedCurrentDate() {
      return this.current.format("MMMM YYYY");
    },
  },
  created() {
    this.current = moment().startOf("week").date(1);
  },
  methods: {
    getDayClass(day) {
      const classes = ["calendar-month-day"];
      if (day.date.month() !== this.current.month()) {
        classes.push("other");
      } else if (moment().isSame(day.date, "day")) {
        classes.push("today");
      }
      return classes.join(" ");
    },
  },
};
</script>

<template>
  <div class="project-section">
    <div class="calendar">
      <div class="calendar-header">
        <h1>{{ formattedCurrentDate }}</h1>
      </div>
      <div class="calendar-month">
        <div class="calendar-week">
          <div v-for="day in days" :key="day.date" :class="getDayClass(day)">
            <div class="calendar-day-name">{{ day.date.format("ddd") }}</div>
            <div class="calendar-day-number">{{ day.date.format("DD") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.project-section {
  background-color: $projects-section;
  border-radius: 32px;
  padding: 15px 15px 0 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  font-weight: 100;

  .calendar {
    width: 100%;
    height: 570px;
    position: relative;

    &-header {
      height: 50px;
      width: 100%;
      text-align: center;
      position: relative;
      z-index: 100;
      margin: 20px 0;

      h1 {
        margin: 0;
        padding: 0;
        font-size: 30px;
        line-height: 50px;
        font-weight: 100;
        letter-spacing: 1px;
      }

      &-right,
      &-left {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        top: 50%;
        margin-top: -7.5px;
        cursor: pointer;
      }

      &-right {
        border-width: 7.5px 0 7.5px 10px;
        border-color: transparent transparent transparent rgba(160, 159, 160, 1);
        right: 20px;
      }

      &-left {
        border-width: 7.5px 10px 7.5px 0;
        border-color: transparent rgba(160, 159, 160, 1) transparent transparent;
        left: 20px;
      }
    }

    &-month {
      width: 100%;
      height: 520px;
      position: relative;
      z-index: 100;

      &-week {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-day {
        display: inline-block;
        width: 53px;
        height: 80px;
        padding: 10px;
        text-align: center;
        vertical-align: top;
        cursor: pointer;
        position: relative;
        z-index: 100;
      }

      .other {
        color: rgba(160, 159, 160, 1);
      }

      .today {
        color: rgba(156, 202, 235, 1);
      }
    }

    &-day-name {
      font-size: 9px;
      text-transform: uppercase;
      margin-bottom: 5px;
      letter-spacing: 0.7px;
      color: #979797;
    }

    &-day-number {
      font-size: 24px;
      letter-spacing: 1.5px;
    }
  }
}
</style>
