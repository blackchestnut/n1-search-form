<template>
  <Combobox
    v-model='model'
    label='Комнатность'
    :options='[
      ["studija", "Студия"],
      ["1", "1-комнатная"],
      ["2", "2-комнатная"],
      ["3", "3-комнатная"],
      ["4", "4-комнатная"],
      ["5+", "5-комнатная и более"],
      ["free", "Свободная планировка"]
    ]'
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
