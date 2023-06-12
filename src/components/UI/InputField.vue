<template lang="pug">
input(
  type="text"
  class="input-field"
  :placeholder="placeholder"
  :value="modelValue"
  @input="updateValue"
)
</template>

<script>
export default {
  name: "InputField",
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const updateValue = (event) => {
      context.emit('update:modelValue', event.target.value);
    }

    return { updateValue }
  }
}
</script>

<style lang="scss">
  .input-field {
    padding: 6px 11px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    width: 100%;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
</style>