<template>
  <Combobox
    v-model='model'
    label='Тип помещения'
    :options='options'
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
  data: () => ({
    options: [
      ['office', 'Офисное помещение'],
      ['universal', 'Универсальное помещение'],
      ['retail', 'Торговые площади'],
      ['warehouse', 'Складское помещение'],
      ['industrial', 'Производственное помещение'],
      ['separate_building', 'Отдельностоящее здание'],
      ['ready_business', 'Готовый бизнес']
    ]
  }),
  computed: {
    // need to filter values from other rubrics
    fixedValue() {
      const allowedKeys = this.options.map(option => option[0]);
      return this.value.filter(key => allowedKeys.includes(key));
    },
    model: {
      get() {
        return this.fixedValue;
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
