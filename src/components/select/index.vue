<template>
  <ExpandableContainer :label='options[value]'>
    <SelectItem
      v-for='(optionValue, optionKey) in options'
      :key='optionKey'
      :label='optionValue'
    />
  </ExpandableContainer>
</template>

<script>
import SelectItem from './item';
import ExpandableContainer from '@/components/expandable_container';

export default {
  name: 'Select',
  components: {
    ExpandableContainer,
    SelectItem
  },
  props: {
    options: { type: Object, required: true },
    value: { type: String, required: false, default: undefined }
  }
};
</script>

<style scoped lang='sass'>
</style>
