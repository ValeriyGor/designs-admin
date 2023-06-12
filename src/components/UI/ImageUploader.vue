<template lang="pug">
div.image-loader
  label.image-loader__label
    input(
      type="file"
      @change="handleFileSelect"
      class="image-loader__input"
      multiple
      accept="image/png, image/gif, image/jpeg"
    )
    img(src="../../assets/images/upload.svg")
  div.image-loader__loaded

</template>

<script>

export default {
  name: "ImageLoader",
  data() {
    return {
      files: []
    }
  },
  methods: {
    handleFileSelect(e) {
      console.log(e.target.files);
      // Функціонал по відображенню файлів в component
    }
  }
}
</script>

<style lang="scss">
.image-loader {
  margin-bottom: 16px;
  height: 120px;
  border: 2px dashed rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  position: relative;
  &__input {
    display: none;
  }
  &__label {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__loaded {
    img {
      width: 120px;
    }
  }

}
</style>