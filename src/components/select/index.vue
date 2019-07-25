<template>
  <ExpandableContainer :label='options[value]'>
    <ExpandableItem
      v-for='(optionValue, optionKey) in options'
      :key='optionKey'
      :label='optionValue'
    />
  </ExpandableContainer>
</template>

<script>
import ExpandableContainer from '@/components/expandable_container';
import ExpandableItem from '@/components/expandable_item';

export default {
  name: 'Select',
  components: {
    ExpandableContainer,
    ExpandableItem
  },
  props: {
    options: { type: Object, required: true },
    value: { type: String, required: false, default: undefined }
  }
};
</script>

<style scoped lang='sass'>
</style>
