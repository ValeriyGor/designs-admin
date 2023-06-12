<template lang="pug">
div.aside-left
  img.aside-left__logo(src="../../../assets/images/logo.svg" alt="Logo")
</template>

<script>

export default {
  name: "AsideLeft"
}
</script>

<style lang="scss">
.aside-left {
  width: 40px;
  background-color: #627B7A;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 8px;
}
</style>