<template lang="pug">
div.design-list
  .container
    .design-list__header
      h2 Всі дизайни
      .design-list__actions
        BtnLink(type="primary" title="Додати дизайн" to="/design/add")

    .design-list__content
      DesignsItem(
        v-for="design in designs"
        :key="design.hash"
        :design-data="design"
      )


</template>

<script>
import BtnLink from "@/components/UI/BtnLink"
import DesignsItem from "@/components/Designs/DesignItem"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "DesignsList",
  components: {DesignsItem, BtnLink},
  computed: {
    ...mapGetters({
      designs: 'Design/designs',
      loadedDesignItems: 'Design/loadedDesignItems',
    })
  },
  methods: {
    ...mapActions({
      GET_DESIGNS: "Design/GET_DESIGNS",
    })
  },
  mounted() {
    if(!this.loadedDesignItems) {
      this.GET_DESIGNS()
    }
  },
}
</script>

<style lang="scss">
.design-list {
  background-color: #2C3D39;
  color: #fff;
  min-height: 100vh;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
}
</style>

