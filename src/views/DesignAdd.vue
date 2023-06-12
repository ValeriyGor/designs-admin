<template lang="pug">
.design-add
  .design-add__header
    LinkBack
    SwitchCustom(
      title-on="Опублікований"
      title-off="Неопублікований"
      v-model="formDesign.isPublished"
    )
    CustomButton(title="Зберегти і вийти" type="primary" @click="saveAndClose")

  .design-add__content
    .design-add__row
      ImageUploader
    .design-add__row
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
    .design-add__row
      InputField(
        placeholder="https://design###.horoshop.ua/"
        v-model="formDesign.link"
      )

</template>

<script>
import SwitchCustom from "@/components/UI/SwitchCustom";
import LinkBack from "@/components/UI/LinkBack";
import CustomButton from "@/components/UI/Button";
import InputField from "@/components/UI/InputField";
import ImageUploader from "@/components/UI/ImageUploader";

import {inject, ref} from "vue";
import {useRouter} from "vue-router"
import {useStore} from "vuex";

export default {
  name: "DesignsAdd",
  components: {
    SwitchCustom,
    CustomButton,
    LinkBack,
    InputField,
    ImageUploader,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const swal = inject('$swal');

    const formDesign = ref({
      isPublished: false,
      hash: null,
      title: '',
      link: null,
    })


    const saveAndClose = () => {
      if(!formDesign.value.hash || !formDesign.value.title) {
        swal({
          title: 'Увага',
          text: "Заповніть обов'язкові поля Заголовок та ###",
          icon: 'error',
          confirmButtonText: 'Добре',
        })
        return false;
      }

      store.dispatch('Design/ADD_DESIGN', {data: formDesign.value}).then(() => {
        router.push('/')
      })
    }

    return {
      formDesign,
      saveAndClose
    }
  },
}
</script>


<style lang="scss" scoped>
.design-add {
  padding: 24px 32px 24px 120px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    position: relative;
  }
  &__content {
    max-width: 600px;
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

