<template>
  <div class="load-bg">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.load-bg{
  background: rgba(0, 0, 0, .6);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
.loader {
  right: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: absolute;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  }
/* .loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
} */
.loader::after,
.loader::before {
  content: '';
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 2px solid red;
  position: absolute;
  left: 0;
  top: 0;
  animation: rotationBreak 3s ease-in-out infinite alternate;
}
.loader::after {
  border-color: #409eff;
  animation-direction: alternate-reverse;
}

@keyframes rotationBreak {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
