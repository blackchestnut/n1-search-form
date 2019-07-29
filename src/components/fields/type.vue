<template>
  <Combobox
    v-model='type'
    label='Тип помещения'
    :options='[
      ["office", "Офисное помещение"],
      ["universal", "Универсальное помещение"],
      ["retail", "Торговые площади"],
      ["warehouse", "Складское помещение"],
      ["industrial", "Производственное помещение"],
      ["separate_building", "Отдельностоящее здание"],
      ["ready_business", "Готовый бизнес"]
    ]'
  />
</template>

<script>
import Combobox from '@/components/combobox';

export default {
  name: 'FieldType',
  components: {
    Combobox
  },
  props: {
    value: { type: Array, required: true }
  },
  computed: {
    type: {
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
