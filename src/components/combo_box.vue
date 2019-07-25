<template>
  <ExpandableContainer
    :label='label'
  >
    <ExpandableItem
      v-for='(optionValue, optionKey) in options'
      :key='optionKey'
      :label='optionValue'
      @click='() => select(optionKey)'
    />
  </ExpandableContainer>
</template>

<script>
import ExpandableContainer from '@/components/expandable_container';
import ExpandableItem from '@/components/expandable_item';

export default {
  name: 'ComboBox',
  components: {
    ExpandableContainer,
    ExpandableItem
  },
  props: {
    label: { type: String, required: true },
    options: { type: Object, required: true },
    value: { type: Array, required: true }
  },
  methods: {
    select(value) {
      this.$emit('input', value);
    }
  }
};
</script>

<style scoped lang='sass'>
</style>
