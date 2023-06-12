<template lang="pug">
.link-back(@click="$router.go(-1)")
  img(src="../../assets/images/arrow-left.svg")
</template>

<script>

export default {
  name: "LinkBack"
}
</script>

<style lang="scss">
.link-back {
  position: absolute;
  top: 6px;
  left: -88px;
  transition: opacity 0.15s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}
</style>