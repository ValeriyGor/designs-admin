<template lang="pug">
label.switch
  input.switch__checkbox(
    type="checkbox"
    :checked="modelValue"
    @change="updateValue"
  )
  span.switch__field
  span.switch__title {{modelValue ? titleOn : titleOff}}
</template>

<script>
export default {
  name: "SwitchCustom",
  props: {
    modelValue: {
      type: Boolean,
    },
    titleOn: {
      type: String,
      default: "Увімкнуто",
    },
    titleOff: {
      type: String,
      default: "Вимкнуто",
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const updateValue = (event) => {
      context.emit('update:modelValue', event.target.checked);
    }

    return { updateValue }
  }
}
</script>

<style lang="scss">
.switch {
  display: inline-flex;
  align-items: center;

  &__checkbox {
    display: none;
    &:checked {
      & + .switch__field {
        background-color: #7AB10E;
        &:after {
          left: 42px;
        }
      }
      & ~ .switch__title {
        color: #699707;
      }
    }
  }
  &__field {
    display: block;
    width: 64px;
    height: 24px;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.1);
    position: relative;
    transition: background-color 0.15s;
    cursor: pointer;
    margin-right: 10px;
    &:after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      top: 2px;
      left: 2px;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.3s;
    }
  }

  &__title {
    color: #222;
    font-size: 14px;
    line-height: 1.3;
    transition: color 0.15s;
  }
}
</style>