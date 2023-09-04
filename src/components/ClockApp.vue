<script>
export default {
  name: "ClockApp",
  data() {
    return {
      date: "",
      time: "",
      week: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  methods: {
    updatedTime() {
      const cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "-" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(cd.getDate(), 2) +
        " " +
        this.week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      let zero = "";
      for (let i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
  mounted() {
    this.updatedTime();
    setInterval(this.updatedTime, 1000);
  },
};
</script>

<template>
  <div class="project-section" id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.project-section {
  background-color: $projects-section;
  border-radius: 32px;
  padding: 15px 15px 0 15px;
  overflow: hidden;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  .date {
    font-size: 12px;
    color: #979797;
    font-weight: 600;
    margin: 0;
  }
  .time {
    font-size: 40px;
    font-weight: 600;
    margin: 0;
    position: sticky;
  }
}
</style>
