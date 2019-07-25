<template>
  <ExpandableContainer
    :label='label'
  >
    <ExpandableItem
      v-for='option in options'
      :key='option[0]'
      :label='option[1]'
      @click='() => select(option[0])'
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
    options: { type: Array, required: true },
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
