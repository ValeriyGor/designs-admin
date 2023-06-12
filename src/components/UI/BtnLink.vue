<template lang="pug">
router-link(
  class="btn-link"
  :class="`btn-link--${type}`"
  :to="to"
) {{title}}

</template>

<script>
export default {
  name: "BtnLink",
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    to: {
      type: String,
      default: '/'
    },
  }
}
</script>

<style lang="scss">
.btn-link {
  padding: 7px 11px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  text-decoration: none;
  &--primary {
    color: #fff;
    background-color: #418AF2;
  }

  &--secondary {
    color: #E61610;
    background-color: #fff;
  }
}
</style>