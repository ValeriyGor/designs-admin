<template lang="pug">
div.design-item
  router-link(:to="`/design/${designData.hash}`")
    .design-item__preview
      img(:src="getImgUrl(designData.preview)")
    .design-item__info
      span.design-item__hash {{designData.hash}}
      .design-item__tilte {{designData.title}}


</template>

<script>
export default {
  name: "DesignsItem",
  props: {
    srcPreview: {
      type: String,
      default: ''
    },
    hash: {
      type: Number,
      default: 0
    },
    designData: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    getImgUrl(src) {
      return require('../../' + src)
    }
  }
}
</script>

<style lang="scss">
.design-item {
  width: calc(25% - 20px);
  margin: 0 10px 40px;
  &__preview {
    margin-bottom: 16px;
    img {
      width: 100%;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  &__hash {
    height: 16px;
    display: flex;
    align-items: center;
    font-size: 11px;
    line-height: 1;
    padding: 0 5px;
    border-radius: 8px;
    margin-right: 8px;
    background-color: #fff;
    color: #000;
  }
  &__tilte {
    text-decoration: none;
    color: #fff;
  }
}
</style>
