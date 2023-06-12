<template lang="pug">
.design-edit
  .design-edit__header
    LinkBack
    SwitchCustom(
      title-on="Опублікований"
      title-off="Неопублікований"
      v-model="formDesign.isPublished"
      )
    .design-edit__actions
      CustomButton(title="Видалити" type="secondary" @click="showAlertRemove")
      CustomButton(title="Зберегти і вийти" type="primary" @click="saveAndClose")

  .design-edit__content
    .design-edit__row
      ImageUploader
    .design-edit__row
      InputField(
        placeholder="###"
        v-model="formDesign.hash"
        class="flex-1"
      )
      InputField(
        placeholder="Назва дизайну"
        v-model="formDesign.title"
        class="flex-8"
      )
    .design-edit__row
      InputField(
        placeholder="https://design###.horoshop.ua/"
        v-model="formDesign.link"
      )


</template>

<script>
import SwitchCustom from "@/components/UI/SwitchCustom";
import CustomButton from "@/components/UI/Button";
import LinkBack from "@/components/UI/LinkBack";
import InputField from "@/components/UI/InputField";
import ImageUploader from "@/components/UI/ImageUploader";

import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router"
import {ref, inject} from "vue";

export default {
  name: "DesignsEdit",
  components: {
    CustomButton,
    SwitchCustom,
    LinkBack,
    InputField,
    ImageUploader,
  },

  /* eslint-disable */
  setup() {
    const swal = inject('$swal');
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const designs = ref(store.getters["Design/designs"]);

    const currentHash = route.params.hash;
    const currentDesignItem = designs.value.filter(design => +design.hash === +currentHash)[0]

    const formDesign = ref({
      isPublished: currentDesignItem && currentDesignItem.isPublished,
      hash: currentDesignItem && currentDesignItem.hash,
      title: currentDesignItem && currentDesignItem.title,
      preview: currentDesignItem && currentDesignItem.preview,
      link: currentDesignItem && currentDesignItem.link,
    })

    const showAlertRemove = () => {
      swal({
        title: 'Увага',
        text: "Ви впевнені, що хочете видалити?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Видалити',
        cancelButtonText: 'Відмінити',
      }).then(r => {
        if (r.value) {
          store.dispatch('Design/REMOVE_DESIGN', {hash: currentHash}).then(() => {
            router.push('/')
          })
        }
      });
    }

    const saveAndClose = () => {
      store.dispatch('Design/UPDATE_DESIGN', {data: formDesign.value}).then(() => {
        router.push('/')
      })
    }

    return {
      designs,
      formDesign,
      showAlertRemove,
      saveAndClose,
    }
  },
}
</script>

<style lang="scss" scoped>
  .design-edit {
    padding: 24px 32px 24px 120px;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    &__content {
      max-width: 600px;
      padding-top: 40px;
    }
    &__row {
      display: flex;
      margin-bottom: 24px;
      input:not(input:last-child) {
        margin-right: 8px;
      }
    }
  }
</style>
