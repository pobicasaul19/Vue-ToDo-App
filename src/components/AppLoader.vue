<script></script>

<template>
  <div class="loader">
    <div class="justify-content-center jimu-primary-loading"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .jimu-primary-loading,
  .jimu-primary-loading::before,
  .jimu-primary-loading::after {
    background: #076fe5;
    width: 13.6px;
    height: 32px;
    animation: loading-key-app 0.8s infinite ease-in-out;
    -webkit-animation: loading-key-app 0.8s infinite ease-in-out;
  }
  .jimu-primary-loading {
    text-indent: -9999em;
    margin: auto;
    position: absolute;
    right: calc(50% - 6.8px);
    top: calc(50% - 16px);
    -webkit-animation-delay: 0.16s !important;
    animation-delay: 0.16s !important;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
    }

    &::before {
      left: -19.992px;
    }

    &::after {
      left: 19.992px;
      -webkit-animation-delay: 0.32 !important;
      animation-delay: 0.32s !important;
    }
  }

  @keyframes loading-key-app {
    0%,
    80%,
    100% {
      opacity: 0.75;
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }
    40% {
      opacity: 1;
      box-shadow: 0 -8px #076fe5;
      height: 40px;
    }
  }

  @keyframes loading-key-app {
    0%,
    80%,
    100% {
      opacity: 0.75;
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }

    40% {
      opacity: 1;
      box-shadow: 0 -8px #076fe5;
      height: 40px;
    }
  }
}
</style>
