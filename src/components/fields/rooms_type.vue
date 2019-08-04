<template>
  <Combobox
    v-model='model'
    label='Комнатность'
    :options='options'
  />
</template>

<script>
import Combobox from '@/components/combobox';

export default {
  name: 'FieldRoomsType',
  components: {
    Combobox
  },
  props: {
    value: { type: Array, required: true }
  },
  data: () => ({
    options: [
      ['studija', 'Студия'],
      ['1', '1-комнатная'],
      ['2', '2-комнатная'],
      ['3', '3-комнатная'],
      ['4', '4-комнатная'],
      ['5+', '5-комнатная и более'],
      ['free', 'Свободная планировка']
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
