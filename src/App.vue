<template lang="pug">
div.app
  AsideLeft
  div.content-page
    router-view
</template>

<script>
import AsideLeft from "@/components/layout/AsideLeft/AsideLeft"

export default {
  name: 'App',
  components: {
    AsideLeft
  },
}
</script>

