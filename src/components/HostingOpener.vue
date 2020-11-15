<template>
<div class="animated-title">
  <div class="text-top">
    <div>
      <span>The Best</span>
      <span>In Price</span>
    </div>
  </div>
  <div class="text-bottom">
    <div>& Performance</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HostingOpener'
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 70vmin;
  margin-left: 50%;
  position: relative;
  margin-top: 20%;
  margin-bottom: -20%;
  transform: translate(-50%, -50%);
  width: 90vmin;
  float: left;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: 12vmin;
  padding: 2vmin 0;
  position: absolute;
}
.animated-title > div div span {
  display: flex;
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid #000;
  top: 0;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: #767676;
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}
</style>
