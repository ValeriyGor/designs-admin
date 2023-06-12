<template lang="pug">
button(
  class="button"
  :class="`button--${type}`"
  @click="$emit('click')"
) {{title}}

</template>

<script>
export default {
  name: "CustomButton",
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
  },
  emits: ['click'],
}
</script>

<style lang="scss">
.button {
  padding: 7px 11px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  text-decoration: none;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &--primary {
    color: #fff;
    background-color: #418AF2;
  }

  &--secondary {
    color: #E61610;
    background-color: #fff;
  }

  &:hover {
    opacity: 0.7;
  }
}
</style>