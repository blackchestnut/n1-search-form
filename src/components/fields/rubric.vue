<template>
  <Select
    v-model='model'
    :options='[
      ["flats", "Квартиры"],
      ["rooms", "Комнаты"],
      ["cottage", "Коттеджи"],
      ["commercial", "Коммерческая"],
      ["dacha", "Дачи, садовые участки"],
      ["land", "Земля"],
      ["garages", "Гаражи, парковки"]
    ]'
  />
</template>

<script>
import Select from '@/components/select';

export default {
  name: 'FieldRubric',
  components: {
    Select
  },
  props: {
    value: { type: String, required: false, default: undefined }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>

<style scoped lang='sass'>
</style>
