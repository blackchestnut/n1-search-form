<template>
  <ExpandableContainer
    :label='label'
  >
    <ExpandableItem
      v-for='option in options'
      :key='option[0]'
      @click='() => select(option[0])'
    >
      {{ option[1] }}
      <Checkbox :is-checked='isSelected(option[0])' />
    </ExpandableItem>
  </ExpandableContainer>
</template>

<script>
import ExpandableContainer from '@/components/expandable_container';
import ExpandableItem from '@/components/expandable_item';
import Checkbox from '@/components/checkbox';

export default {
  name: 'ComboBox',
  components: {
    ExpandableContainer,
    ExpandableItem,
    Checkbox
  },
  props: {
    label: { type: String, required: true },
    options: { type: Array, required: true },
    value: { type: Array, required: true }
  },
  methods: {
    select(value) {
      const newValue = this.value.includes(value) ?
        this.value.filter(v => v !== value) :
        this.value.concat(value);

      this.$emit('input', newValue);
    },
    isSelected(value) {
      return this.value.includes(value);
    }
  }
};
</script>

<style scoped lang='sass'>
.expandable-item
  display: flex
  align-items: center

  .checkbox
    margin-left: auto
    padding-left: 12px
</style>
